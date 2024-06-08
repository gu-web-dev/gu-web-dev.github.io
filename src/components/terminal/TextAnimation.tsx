import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import { useEffect } from "react";

const TextAnimation = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    "hello world :)",
    "we are the glasgow uni web dev society",
    "or GUWD",
    "join the society to learn the skills needed to become a web developer...",
    "win hackathons...",
    "and become instantly employable...",
    "or don't",
    "sudo rm -rf /",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 75, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, []);

  return (
    <span>
      <motion.span className="text-white">{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
};

export default TextAnimation;
