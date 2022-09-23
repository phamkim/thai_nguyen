import React from "react";
import { BaseBody, BaseImage, BaseTitle, SizeBox } from "./styled";
import map from "../assets/images/map.png";
import styled from "styled-components";

const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  
`;

const P = styled.p`
  margin: 0;
  padding: 0;
`;

const PositionMap = () => {
  return (
    <BaseBody>
      <Wrapper>
        <BaseTitle>
          [PHIÊN 1] ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH TỈNH THÁI NGUYÊN
          <P>LẦN THỨ XV, NHIỆM KỲ 2022 - 2027</P>
        </BaseTitle>
        <BaseImage src={map} />

        <SizeBox height="20px" />
        <BaseTitle>
          [PHIÊN 2] ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH TỈNH THÁI NGUYÊN
          <P>LẦN THỨ XV, NHIỆM KỲ 2022 - 2027</P>
        </BaseTitle>
        <BaseImage src={map} />
        <SizeBox height="20px" />
      </Wrapper>
    </BaseBody>
  );
};

export default PositionMap;
