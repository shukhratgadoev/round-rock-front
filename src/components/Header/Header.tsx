import React from "react";

import {
  HeaderComponent,
  Logo,
  ServicesWrapper,
  TitleTxt,
  TitleTxtParagraf,
  ServicesItemImg,
  ServicesInner,
  ServicesItemTxt,
  HeaderButton,
} from "./styles";

const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
      <TitleTxt>What is Lorem Ipsum</TitleTxt>
      <TitleTxtParagraf>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </TitleTxtParagraf>
      <ServicesWrapper>
        <ServicesInner>
          <ServicesItemImg />
          <ServicesItemTxt>Services one</ServicesItemTxt>
        </ServicesInner>
        <ServicesInner>
          <ServicesItemImg />
          <ServicesItemTxt>Services one</ServicesItemTxt>
        </ServicesInner>
        <ServicesInner>
          <ServicesItemImg />
          <ServicesItemTxt>Services one</ServicesItemTxt>
        </ServicesInner>
      </ServicesWrapper>
      <HeaderButton>Help Me</HeaderButton>
    </HeaderComponent>
  );
};

export default Header;
