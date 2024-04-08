import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const { viewport } = useThree();

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    isAnimating.current = true;
    scrollToSection();
    setTimeout(() => {
      isAnimating.current = false;
    }, 1000);
  }, []);

  useEffect(() => {
    // Listen for section changes and animate scrolling if true
    if (!isAnimating.current) {
      scrollToSection();
    }
  }, [section]);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  const scrollToSection = () => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  window.addEventListener("scroll", () => {
    console.log(data.scroll.current);
  });

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    //Getting the current scroll data
    const currentSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && currentSection === 0) {
      onSectionChange(1);
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0);
    }
  });
  return null;
};
