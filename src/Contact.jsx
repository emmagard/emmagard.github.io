import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { getLcn } from './utils/labelled-classnames';
import Banana from "./components/Banana";
import Orange from './components/Orange';

const styles = getLcn({
  contactType: [
    'font-semibold text-black',
    'text-2xl mb-0',
    'sm:text-3xl sm:mb-[20px]'
  ],
  contactItem: [
    'text-1xl mb-[24px] wrap-anywhere',
    'sm:text-2xl sm:mb-[40px]'
  ],
  linkedContactItem: [
    'text-1xl mb-[20px] wrap-anywhere hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
    'sm:text-2xl sm:mb-[40px] sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ]
});

const Contact = () => {
  return (
    <section className="relative px-[20px] sm:px-8 h-full">
      <div className="relative z-3">
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
          <Environment files={"background-contact.jpeg"}/>
          <ambientLight intensity={1} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.9}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <Banana position={[2,1,1.5]} rotation={[0, 0, 7]}/>
          <Orange position={[0, -0.25, 1.25]}/>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;