import classNames from 'classnames';
import { dasherize, underscore } from 'inflection';
import { twMerge } from 'tailwind-merge';

export const labelToClass = (label) => dasherize(underscore(label));

export function getLcn(
  classes,
) {
  const lcn = {};

  Object.keys(classes).forEach((key) => {
    const domClassLabel = labelToClass(key);
    const cn = classNames(classes[key]);
    const conflictResolvedTwClasses = twMerge(cn);
    lcn[key] = domClassLabel + ' ' + conflictResolvedTwClasses;
  });

  return lcn;
}
