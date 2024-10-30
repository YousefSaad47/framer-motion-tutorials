'use client';
import { motion } from 'framer-motion';

// The staggered effect in animations allows multiple child elements to appear one after another with a set delay. This is controlled by setting a """"""staggerChildren"""""" property on a parent container, which creates a gap in time between the start of each child’s animation. Each child has its own animation that triggers in sequence, producing a cascading effect where elements appear in a natural, flowing manner rather than all at once.

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Each child will appear with a 0.3s delay
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const classNames =
  'w-24 h-24 rounded-lg flex items-center justify-center text-white text-lg';

interface StaggerChildrenProps {
  key?: string;
}

export default function StaggerChildren({
  key = 'stagger',
}: StaggerChildrenProps) {
  return (
      <motion.section
        key={key}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-6 p-8"
      >
        <motion.div
          variants={childVariants}
          className={`bg-blue-500 ${classNames}`}
        >
          A
        </motion.div>
        <motion.div
          variants={childVariants}
          className={`bg-green-500 ${classNames}`}
        >
          B
        </motion.div>
        <motion.div
          variants={childVariants}
          className={`bg-red-500 ${classNames}`}
        >
          C
        </motion.div>
        <motion.div
          variants={childVariants}
          className={`bg-yellow-500 ${classNames}`}
        >
          D
        </motion.div>
      </motion.section>
  );
}
