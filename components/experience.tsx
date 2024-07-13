"use client";
import React, { useContext } from "react";
import SectionHeading from "@/components/section-heading";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 " ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              visible={true}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "white"
                    : "0.4rem solid rgba(255,255,255,0.15)",
              }}
              icon={experience.icon}
              date={experience.date}
              iconStyle={{
                background:
                  theme === "light" ? "#9ca3af" : "rgba(255,255,255,0.05)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0 "> {experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
