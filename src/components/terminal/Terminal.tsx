import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";

const Terminal = () => {
  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7, duration: 1 } }}
    >
      <div className="text-blue-100 bg-black rounded-md border-2 p-3">
        <div className="text-blue-400 font-semibold">guwd $</div>
        <div className="text-blue-400 font-semibold">guwd $</div>
        <span className="text-blue-400 font-semibold">guwd $</span>{" "}
        <TextAnimation />
      </div>
    </motion.div>
  );
};

export default Terminal;
