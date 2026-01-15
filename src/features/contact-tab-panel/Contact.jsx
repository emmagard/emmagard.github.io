import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useLabelledClassnames } from '../../shared/hooks/useLabelledClassnames';
import { useMobileViewport } from '../../shared/hooks/useViewportSize';
import Banana from "../../shared/components/Banana";
import Orange from '../../shared/components/Orange';

const styles = useLabelledClassnames({
  contactSection: [
    'relative px-[20px] sm:px-8 h-full',
    'sm:static'
  ],
  contactInfo: [
    'relative z-3'
  ],
  contactList: [
    'grid grid-cols-[90px_1fr] gap-[10px] items-center',
    'sm:grid-cols-[130px_1fr] sm:gap-[14px]'
  ],
  contactType: [
    'col-start-1 col-end-2',
    'font-semibold text-black',
    'text-lg mb-0 leading-[1]',
    'sm:text-2xl'
  ],
  contactValue: [
    'col-start-2 col-end-3',
    'text-md mb-[0px] wrap-anywhere leading-[1]',
    'sm:text-xl sm:mb-[0px]'
  ],
  contactValueLink: [
    'hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
    'sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ]
});

const Contact = () => {
  const isMobile = useMobileViewport();
  const orangePos = isMobile ? [0, -0.08, 1.9] : [0.2, 0, 1.9];
  const bananaPos = [-1.2,-1.2,1.8];

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <dl className={styles.contactList}>
          <dt className={styles.contactType}>Email: </dt>
          <dd className={styles.contactValue}>emmagard@gmail.com</dd>  
          <dt className={styles.contactType}>GitHub: </dt>
          <dd className={styles.contactValue}>
            <a className={styles.contactValueLink} href="https://github.com/emmagard">https://github.com/emmagard</a>
          </dd>
          <dt className={styles.contactType}>LinkedIn: </dt>
          <dd className={styles.contactValue}>
            <a className={styles.contactValueLink} href="https://www.linkedin.com/in/emmagard/">https://www.linkedin.com/in/emmagard/</a>
          </dd>
        </dl>
      </div>

      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Canvas>
          <ambientLight intensity={1} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.9}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <Suspense fallback={null}>
            <Environment files={"background-contact-blank.jpg"}/>
            <Orange position={orangePos} />
            { !isMobile && <Banana position={bananaPos} rotation={[-0.2, 0, 1]}/> }
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;