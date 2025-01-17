"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref, inView } = useInView({ threshold: 0.5 });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical engineering</span>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        chess, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">history</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
