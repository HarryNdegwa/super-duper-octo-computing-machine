import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

export default function Resume() {
  return (
    <div
      id="resume"
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      {/* <SectionTitle main center>
        My Resume
      </SectionTitle> */}
      {/* <SectionText> */}
      <a
        href="/Harrison Ndegwa Resume.pdf"
        style={{ textAlign: "center" }}
        download
      >
        <span
          style={{
            background: "#6b3030",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // margin: "0px 20px 20px 0px",
            borderRadius: "23px",
            color: "#fff",
            width: "200px",
            fontWeight: "bolder",
          }}
        >
          Download Resume
        </span>
      </a>
      {/* </SectionText> */}
    </div>
  );
}
