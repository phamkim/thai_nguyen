import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import background from "../assets/images/background.jpg";
import iconBack from "../assets/images/back.png";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Cascader, Row } from "antd";
import { SizeBox } from "./styled";

export const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const CheckInForm = styled.div`
  background: #fff;
  border-radius: 4px;
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 0;
    background-image: url(${background});
    color: #fff;
  }
`;

export const Detail = styled.div`
  background: transparent;
  height: 500px;
  width: 500px;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: -70px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.p`
  background-image: url(${iconBack});
  background-size: cover;
  height: 30px;
  width: 30px;
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  margin: 5px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    transition: all 0.2s ease-in-out;
    height: 26px;
    width: 27px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: ${(props) => props.width};
  margin-bottom: 20px;
  display: block;
`;

const Title = styled.div`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.textALign};
  margin-bottom: 5px;
  width: fit-content;
`;

const delegationOptions = [
  {
    value: "HUY???N ??O??N PH?? B??NH",
    label: "HUY???N ??O??N PH?? B??NH",
  },
  {
    value: "TH??NH ??O??N PH??? Y??N",
    label: "TH??NH ??O??N PH??? Y??N",
  },
  {
    value: "HUY???N ?????NH H??A",
    label: "HUY???N ?????NH H??A",
  },
  {
    value: "TH??NH PH??? S??NG C??NG",
    label: "TH??NH PH??? S??NG C??NG",
  },
  {
    value: "HUY???N V?? NHAI",
    label: "HUY???N V?? NHAI",
  },
  {
    value: "B???NH VI???N TRUNG ????NG TH??I NGUY??N",
    label: "B???NH VI???N TRUNG ????NG TH??I NGUY??N",
  },
  {
    value: "GANG TH??P",
    label: "GANG TH??P",
  },
  {
    value: "KIM LO???I M??U",
    label: "KIM LO???I M??U",
  },
  {
    value: "XI M??NG QUANG S??N",
    label: "XI M??NG QUANG S??N",
  },
  {
    value: "BAN QU???N L?? KHU C??NG NGHI???P",
    label: "BAN QU???N L?? KHU C??NG NGHI???P",
  },
  {
    value: "BCH QU??N S???",
    label: "BCH QU??N S???",
  },
  {
    value: "HUY???N PH?? L????NG",
    label: "HUY???N PH?? L????NG",
  },
  {
    value: "C??NG AN T???NH",
    label: "C??NG AN T???NH",
  },
  {
    value: "HUY???N ??O??N ?????I T???",
    label: "HUY???N ??O??N ?????I T???",
  },
  {
    value: "HUY???N ?????NG H???Y",
    label: "HUY???N ?????NG H???Y",
  },
  {
    value: "?????I H???C TH??I NGUY??N",
    label: "?????I H???C TH??I NGUY??N",
  },
  {
    value: "??O??N KH???I C??C C?? QUAN T???NH",
    label: "??O??N KH???I C??C C?? QUAN T???NH",
  },
  {
    value: "?????I BI???U CH??? ?????NH",
    label: "?????I BI???U CH??? ?????NH",
  },
];

const userOptions = [
  // {
  //   value: "V?? Th??? L???",
  //   label: "V?? Th??? L???",
  // },
  // {
  //   value: "D????ng V??n H???i",
  //   label: "D????ng V??n H???i",
  // },
  // {
  //   value: "D????ng V??n Duy??n",
  //   label: "D????ng V??n Duy??n",
  // },
  // {
  //   value: "Tr????ng Th??? Th??y Ch??m",
  //   label: "Tr????ng Th??? Th??y Ch??m",
  // },
];

const CheckIn = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    delegation: "",
  });

  const onDOChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const onUOChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  let navigate = useNavigate();

  return (
    <Wrapper>
      <Detail>
        
        <Logo src={logo} width="200px" />
        <Title color="#f8f23d" size="40px" textALign="center" fontWeight="bold">
          H??? TH???NG ??I???M DANH
        </Title>
        <Title color="white" textALign="center" fontWeight="bold">
          ?????I H???I ?????I BI???U ??O??N TNCS H??? CH?? MINH T???NH TH??I NGUY??N
        </Title>
        <Title color="white" textALign="center" fontWeight="bold">
          L???N TH??? XV, NHI???M K??? 2022-2027
        </Title>
      </Detail>

      <CheckInForm>
        <Icon
          onClick={() => {
            navigate("/");
          }}
        />
        <SizeBox height="100px"/>
        <Logo src={logo} width="100px" />
        <Row style={{ width: "100%", maxWidth: "258px" }}>
          <Title>T??n ?????i bi???u:</Title>
          <Cascader
            style={{ width: "100%" }}
            options={userOptions}
            onChange={onUOChange}
            placeholder="H??y ch???n t??n ?????i bi???u"
            showSearch={{
              filter,
            }}
            onSearch={(value) => console.log(value)}
          />
        </Row>
        <SizeBox height="20px" />
        <Row style={{ width: "100%", maxWidth: "258px" }}>
          <Title>??o??n ?????i bi???u:</Title>
          <Cascader
            style={{ width: "100%" }}
            options={delegationOptions}
            onChange={onDOChange}
            placeholder="H??y ch???n ??o??n ?????i bi???u"
            showSearch={{
              filter,
            }}
            onSearch={(value) => console.log(value)}
          />
        </Row>
        <SizeBox height="20px" />
        <Button
          // onClick={() => {
          //   navigate("/");
          // }}
          type="primary"
          size="large"
        >
          ??i???m Danh
        </Button>
      </CheckInForm>
    </Wrapper>
  );
};

export default CheckIn;
