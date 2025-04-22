import React from 'react';
import { Canvas } from '@react-three/fiber';
import { getLcn } from './utils/labelled-classnames';
import Banana from "./components/Banana";

const styles = getLcn({
  sectionTitle: [
    'font-semibold pb-[40px] mt-[30px]',
    'text-4xl',
    'sm:text-6xl'
  ],
  contactType: [
    'font-semibold text-black',
    'text-2xl mb-0',
    'sm:text-4xl sm:mb-[20px]'
  ],
  contactItem: [
    'text-2xl mb-[24px] wrap-anywhere',
    'sm:text-4xl sm:mb-[40px]'
  ],
  linkedContactItem: [
    'text-2xl mb-[20px] wrap-anywhere',
    'sm:text-4xl sm:mb-[40px]'
  ]
});

const Contact = () => {
  return (
    <section className="relative h-screen px-8">
      <div className="relative z-3">
        <h2 className={styles.sectionTitle}>Contact</h2>

        <dl className="">
          <dt className={styles.contactType}>Email: </dt>
          <dd className={styles.contactItem}>emmagard@gmail.com</dd>

          <dt className={styles.contactType}>GitHub: </dt>
          <dd className={styles.linkedContactItem}>
            <a href="https://github.com/emmagard">https://github.com/emmagard</a>
          </dd>

          <dt className={styles.contactType}>LinkedIn: </dt>
          <dd className={styles.linkedContactItem}>
            <a href="https://www.linkedin.com/in/emmagard/">https://www.linkedin.com/in/emmagard/</a>
          </dd>
        </dl>
      </div>

      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Canvas>
          <ambientLight intensity={1} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.9}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <Banana position={[1.5,-1.75,1]} rotation={[0, 0, 7]}/>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;