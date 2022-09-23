import { Image } from "antd";
import React from "react";
import styled from "styled-components";
import tn_map from "../../assets/images/ban-do-thai-nguyen.jpg"
const Wrapper = styled.div`
  width: 25vw;
  max-width: 320px;
  min-height: 100vh;
  background: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
  padding: 10px;
`;

const Title = styled.div`
  background: #256ce1;
  color: #fff;
  text-align: center;
  padding: 5px 0 5px 0;
`;

const ImageMap = styled(Image)`
  width: 100%;
  height: auto;
`;

const MySider = () => {
  return (
    <Wrapper>
      <Title>BẢN ĐỒ ĐỊA GIỚI HÀNH CHÍNH</Title>
      <ImageMap src={tn_map} />
    </Wrapper>
  );
};

export default MySider;
