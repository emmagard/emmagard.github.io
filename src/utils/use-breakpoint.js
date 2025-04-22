import { useState, useLayoutEffect} from "react";

export function useMobileBreakpoint() {
  const query = window.matchMedia('not all and (min-width: 640px)');
  const [matches, setMatches] = useState(query.matches);

  useLayoutEffect(() => {
    function handleChange(evt) {
      setMatches(evt.matches);
    }
    query.addEventListener('change', handleChange);
    return () => {
      query.removeEventListener('change', handleChange);
    };
  }, []);

  return matches;
}