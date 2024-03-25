'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface DivTransitionProps {
  children: React.ReactNode;
  initial?: { [key: string]: any };
  transition?: { [key: string]: any };
  className?: string;
}

const DivTransition: React.FC<DivTransitionProps> = ({
  children,
  initial = { y: -200, opacity: 0 },
  transition = { ease: 'easeInOut', duration: 1 },
  className = ''
}) => {
  return (
    <motion.div
      initial={initial}
      transition={transition}
      className={className}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default DivTransition;
