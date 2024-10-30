'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', delayChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface BeforeChildrenProps {
  key?: string;
}

export default function BeforeChildren({
  key = 'before',
}: BeforeChildrenProps) {
  return (
    <motion.div
      key={key}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <h1 className="text-3xl font-bold mb-10 text-gray-100">
        Before Children
      </h1>
      <motion.p variants={childVariants} className="text-gray-100">
        Welcome to Framer Motion
      </motion.p>
    </motion.div>
  );
}
