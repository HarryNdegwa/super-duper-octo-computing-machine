import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there,
        </SectionTitle>
        <SectionText>
          I am Harrison Ndegwa, a passionate full stack software developer
          currently based in Nairobi,Kenya. My expertise is in developing rich
          web UIs and their backend functionality using latest web technologies.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
