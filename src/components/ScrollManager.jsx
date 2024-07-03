import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import useStore from "../../store/Store";

export const ScrollManager = (props) => {
  // Accessing current section and section setter from the store  =====>
  const section = useStore((state) => state.section);
  const onSectionChange = useStore((state) => state.setSection);

  // Initialize the scroll data and references for last scroll position and animation state  =====>
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const isBallRolling = useRef(false);

  // Adding CSS classes to the scroll container due to weird css conflict  =====>
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  // Side-effect to handle scrolling to the correct section when section state changes  =====>
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1, // Animation duration
      scrollTop: section * data.el.clientHeight, // Scroll to the top position of the current section
      onStart: () => {
        isAnimating.current = true; // Set animation state to true when animation starts
      },
      onComplete: () => {
        isAnimating.current = false; // Set animation state to false when animation completes
      },
    });
  }, [section]);

  // useFrame hook to handle smooth scrolling based on user interaction  =====>
  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current; // Update last scroll position if animating
      return;
    }

    const currentSection = Math.floor(data.scroll.current * data.pages); // Calculate the current section based on scroll position
    const scrollTop = data.scroll.current; // Current scroll position
    const pages = data.pages; // Total number of pages

    // Debounce mechanism to prevent multiple quick scrolls
    if (Math.abs(scrollTop - lastScroll.current) < 0.1 / pages) {
      return;
    }

    // Handling scroll down event
    if (scrollTop > lastScroll.current) {
      if (currentSection === 0 && section === 0) {
        if (!isBallRolling.current && currentSection === 0) {
          // Slow down the scroll
          setTimeout(() => {
            onSectionChange(1); // Scroll to section 1 from section 0
          }, 1000);
          isBallRolling.current = true;
        } else {
          onSectionChange(1);
        }
      } else if (currentSection === 1 && section === 1) {
        onSectionChange(2); // Scroll to section 2 from section 1
      }
    } else {
      // Handling scroll up event
      if (
        currentSection === 1 &&
        scrollTop < 1 / (pages - 1) &&
        section === 1
      ) {
        onSectionChange(0); // Scroll to section 0 from section 1
      } else if (
        currentSection === 2 &&
        scrollTop < 2 / (pages - 1) &&
        section === 2
      ) {
        onSectionChange(1); // Scroll to section 1 from section 2
      }
    }

    lastScroll.current = data.scroll.current; // Update last scroll position
  });

  return null; // This component does not render anything
};
