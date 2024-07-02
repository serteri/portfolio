"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 " ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              visible={true}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              icon={experience.icon}
              date={experience.date}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0 "> {experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
