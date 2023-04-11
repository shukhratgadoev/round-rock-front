import styled from "styled-components";
import HeaderBg from "../../data/header-bg.jpg";
import HeaderItem from "../../data/header-item.svg";
import LogoImg from "../../data/111.svg";

export const HeaderComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 133px;
  padding-bottom: 79px;
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 97px;
  width: 100%;
  max-width: 404px;
  height: 92px;
  @media (max-width: 768px) {
    max-width: 250px;
    background-size: contain;
    margin-bottom: 32px;
  }
`;

export const TitleTxt = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 118.5%;
  color: #fff;
  margin-bottom: 30px;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;
    line-height: 80.5%;
  }
`;

export const TitleTxtParagraf = styled.div`
  width: 100%;
  max-width: 520px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  margin-bottom: 27px;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 566px;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ServicesInner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ServicesItemImg = styled.div`
  background-image: url(${HeaderItem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 102px;
  height: 102px;
  margin-bottom: 12px;
`;

export const ServicesItemTxt = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
`;

export const HeaderButton = styled.button`
  background: #50b2ea;
  box-shadow: 0px 20px 40px rgba(129, 209, 255, 0.2);
  border-radius: 10px;
  width: 192px;
  height: 62px;
  color: #fff;
  border: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 160px;
    height: 50px;
  }
`;
