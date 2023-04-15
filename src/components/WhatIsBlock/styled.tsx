import styled from "styled-components";
import Man from "../../data/man.png";

export const WhatIsBlockMain = styled.div`
  background-color: #f2f2f2;
`;

export const WhatIsBlockWrapper = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 23px;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const WhatIsBlockCover = styled.div`
  width: 100%;
  max-width: 518px;
  padding-right: 77px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  width: 100%;
  margin-left: auto;
  @media (max-width: 1280px) {
    max-width: 410px;
    padding-right: 20px;
  }
  @media (max-width: 992px) {
    margin: 0;
    text-align: center;
  }
`;

export const WhatIsBlockTitle = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  margin-top: 0;
  margin-bottom: 20px;
  @media (max-width: 1280px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media (max-width: 992px) {
    width: inherit;
  }
`;

export const WhatIsBlockParagraf = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 30px;
  @media (max-width: 1280px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const WhatIsBlockUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const WhatIsBlockList = styled.li`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  height: 18px;
  margin-bottom: 20px;
`;

export const WhatIsBlockImgSection = styled.div`
  width: 100%;
  max-width: 50%;
  height: 509px;
  background-color: #50b2ea;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  position: relative;
  @media (max-width: 1280px) {
    height: 380px;
  }
  @media (max-width: 992px) {
    max-width: inherit;
    border-radius: 0;
  }
`;

export const WhatIsBlockImg = styled.div`
  position: absolute;
  top: 77px;
  left: 13px;
  background-image: url(${Man});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  max-width: 559px;
  max-height: 509px;
  @media (max-width: 1280px) {
    background-size: contain;
    max-width: 390px;
    max-height: 350px;
  }
  @media (max-width: 992px) {
    top: 20%;
    display: flex;
    justify-content: center;
    width: 100%;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 40px;
    background-size: cover;
  }
`;

export const WhatIsBlockButtonBtnWrraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhatIsBlockButtonBtn = styled.button`
  background: rgb(80, 178, 234);
  box-shadow: rgba(129, 209, 255, 0.2) 0px 20px 40px;
  border-radius: 10px;
  width: 160px;
  height: 54px;
  color: rgb(255, 255, 255);
  border: 1px solid #fff;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;

  margin-top: 127px;
  margin-bottom: 50px;
  @media (max-width: 1280px) {
    margin-top: 60px;
  }
`;
