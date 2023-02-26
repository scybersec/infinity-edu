'use client';

import { delay, motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Infinity
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >


        </motion.div>
      </div>

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1,)}
        className=" flex justify-center relative w-full md:-mt-[220px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] top-[50px]" />

        <motion.img
        
          whileHover={{scale: 1.2}}
          whileTap={{rotateY: 360}}
          src="/cover.png"
          alt="hero_cover"
          className="w-[800px] sm:h-[500px] h-[350px] object-cover z-10 relative rounded-[50px]"
        />

      </motion.div>
    </motion.div>
    
  </section>
);

export default Hero;
