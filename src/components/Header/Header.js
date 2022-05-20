import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <Icon icon="eos-icons:rotating-gear" style={{ fontSize: "50px" }} />
          <h1 style={{ marginLeft: "5px", fontSize: "50px" }}>HN</h1>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/HarryNdegwa" target="_blank">
        <Icon icon="akar-icons:github-fill" style={{ fontSize: "30px" }} />
      </SocialIcons>
      {/* <SocialIcons
        href="https://www.linkedin.com/in/harryndegwa/"
        target="_blank"
      >
        <Icon icon="brandico:linkedin-rect" style={{ fontSize: "30px" }} />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/codeyourempire" target="_blank">
        <Icon
          icon="ant-design:twitter-circle-filled"
          style={{ fontSize: "38px" }}
        />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
