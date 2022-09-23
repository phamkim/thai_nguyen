import styled from "styled-components";
import { Image } from "antd";
import { Link } from "react-router-dom";

export const BaseBody = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  /* align-items: center; */
  background: #fff;
  max-width: 750px;
  width: 50vw;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const BaseImage = styled(Image)`
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const BaseTitle = styled.div`
  background: #256ce1;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 5px 0 5px 0;
`;

export const SizeBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const BaseTitleLink = styled(Link)`
  border-bottom: 1px dashed #000;
  margin: 5px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  max-width: 750px;
  width: 50vw;
  background: #fff;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
