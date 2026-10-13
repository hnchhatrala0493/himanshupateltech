import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { personalInfo } from '../../config/personal';

export function HeroPortrait() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-visual hero-portrait-visual"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: 'easeOut' }}
    >
      <div className="availability"><i />Available for work</div>
      <div className="portrait-glow" aria-hidden="true" />
      <div className="portrait-dots" aria-hidden="true" />
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="portrait-circle" aria-hidden="true" />
      <div className="portrait">
        <img src={personalInfo.profileImage} alt="Himanshu Chhatrala - MERN Stack Developer" width="1377" height="1142" fetchPriority="high" />
      </div>
      <div className="float-card experience-float">
        <CalendarDays aria-hidden="true" />
        <span>2+ Years<small>Experience</small></span>
      </div>
    </motion.div>
  );
}
