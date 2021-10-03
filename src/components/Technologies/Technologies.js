import React from "react";
import { TechnologiesData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      Here are my favourites.
    </SectionText>

    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {TechnologiesData.map((tech, idx) => (
        <span
          key={idx}
          style={{
            background: "#6b3030",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            margin: "0px 20px 20px 0px",
            borderRadius: "23px",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
