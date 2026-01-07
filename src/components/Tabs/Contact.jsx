import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { getLcn } from '../../utils/labelled-classnames';
import Banana from "../Banana";
import Orange from '../Orange';

const styles = getLcn({
  contactSection: [
    'relative px-[20px] sm:px-8 h-full',
    'sm:static'
  ],
  contactInfo: [
    'relative z-3'
  ],
  contactList: [
    'grid grid-cols-[100px_1fr]',
    'sm:grid-cols-[130px_1fr] sm:gap-[14px]'
  ],
  contactType: [
    'col-start-1 col-end-2',
    'font-semibold text-black',
    'text-xl mb-0',
    'sm:text-2xl'
  ],
  contactValue: [
    'col-start-2 col-end-3',
    'text-lg mb-[0px] wrap-anywhere',
    'sm:text-xl sm:mb-[0px]'
  ],
  linkedContactValue: [
    'text-lg mb-[0px] wrap-anywhere hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
    'sm:text-xl sm:mb-[0px] sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ]
});

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <dl className={styles.contactList}>
          <dt className={styles.contactType}>Email: </dt>
          <dd className={styles.contactValue}>emmagard@gmail.com</dd>  
          <dt className={styles.contactType}>GitHub: </dt>
          <dd className={styles.linkedContactValue}>
            <a href="https://github.com/emmagard">https://github.com/emmagard</a>
          </dd>
          <dt className={styles.contactType}>LinkedIn: </dt>
          <dd className={styles.linkedContactValue}>
            <a href="https://www.linkedin.com/in/emmagard/">https://www.linkedin.com/in/emmagard/</a>
          </dd>
        </dl>
      </div>

      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Canvas>
          <Environment files={"background-contact-blank.jpg"}/>
          <ambientLight intensity={1} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.9}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <Banana position={[2.3,1.2,1]} rotation={[0, 0, 8]}/>
          <Orange position={[0.14, -0.1, 1.8]} />
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;