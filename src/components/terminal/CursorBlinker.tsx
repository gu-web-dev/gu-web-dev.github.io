import { motion } from "framer-motion";

const variant = {
  blinking: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repreatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlinker = () => {
  return (
    <motion.div
      variants={variant}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-white"
    />
  );
};

export default CursorBlinker;
