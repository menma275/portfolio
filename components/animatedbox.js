import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const AnimatedBox = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <MotionBox
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedBox;
