import React from 'react';
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: 100, height: 100, backgroundColor: 'red' }}
    >
      Fade In Box
    </motion.div>
  );
};

export default MyComponent;
