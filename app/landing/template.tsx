'use client'

import { motion } from "framer-motion"
import React from "react"

interface TemplateProps {
  children: React.ReactNode;
  initial?: { [key: string]: any };
  animate?: { [key: number]: any };
  transition?: { [key: string]: any };
  className?: string;
}

const Template: React.FC<TemplateProps> = ({
  children,
  initial={y: 20, opacity: 0 },
  animate={y: 0, opacity: 1 },
  transition = { ease: 'easeInOut', duration: 0.75 },
  className = ""
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={ className }
    >
      {children}
    </motion.div>
  );
}

export default Template;