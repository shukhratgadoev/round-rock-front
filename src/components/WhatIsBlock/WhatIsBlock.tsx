import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  WhatIsBlockWrapper,
  WhatIsBlockTitle,
  WhatIsBlockParagraf,
  WhatIsBlockCover,
  WhatIsBlockUl,
  WhatIsBlockList,
  WhatIsBlockImgSection,
  WhatIsBlockImg,
  WhatIsBlockButtonBtnWrraper,
  WhatIsBlockButtonBtn,
  WhatIsBlockMain,
} from "./styled";

const WhatIsBlock: React.FC = () => {
  return (
    <WhatIsBlockMain>
      <WhatIsBlockWrapper>
        <WhatIsBlockCover>
          <WhatIsBlockTitle>What is Lorem Ipsum</WhatIsBlockTitle>
          <WhatIsBlockParagraf>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </WhatIsBlockParagraf>
          <WhatIsBlockUl>
            <WhatIsBlockList>
              <AiOutlineCheckCircle />
              &nbsp; Lorem Ipsum is simply dummy text of the printing
            </WhatIsBlockList>
            <WhatIsBlockList>
              <AiOutlineCheckCircle />
              &nbsp; Lorem Ipsum is simply dummy text of the printing
            </WhatIsBlockList>
            <WhatIsBlockList>
              <AiOutlineCheckCircle />
              &nbsp; Lorem Ipsum is simply dummy text of the printing
            </WhatIsBlockList>
          </WhatIsBlockUl>
        </WhatIsBlockCover>
        <WhatIsBlockImgSection>
          <WhatIsBlockImg />
        </WhatIsBlockImgSection>
      </WhatIsBlockWrapper>

      <WhatIsBlockButtonBtnWrraper>
        <WhatIsBlockButtonBtn>Help Me</WhatIsBlockButtonBtn>
      </WhatIsBlockButtonBtnWrraper>
    </WhatIsBlockMain>
  );
};

export default WhatIsBlock;
