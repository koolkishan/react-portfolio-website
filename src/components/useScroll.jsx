import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (thresh = 0.1) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
