import React from "react";
import { Icon } from "@iconify/react";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  FooterTop,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Reach Out
        </h1>
        <LinkList>
          {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn> */}
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:h21948298@gmail.com">
              h21948298@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
      </FooterTop>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Simple is better than complex.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/drogon98" target="_blank">
            <Icon icon="akar-icons:github-fill" style={{ fontSize: "30px" }} />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/harrison-omari-60821124b/"
            target="_blank"
          >
            <Icon icon="brandico:linkedin-rect" style={{ fontSize: "30px" }} />
          </SocialIcons>
          {/*<SocialIcons
            href="https://twitter.com/codeyourempire"
            target="_blank"
          >
            <Icon
              icon="ant-design:twitter-circle-filled"
              style={{ fontSize: "38px" }}
            />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
