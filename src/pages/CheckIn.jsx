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
    value: "HUYỆN ĐOÀN PHÚ BÌNH",
    label: "HUYỆN ĐOÀN PHÚ BÌNH",
  },
  {
    value: "THÀNH ĐOÀN PHỔ YÊN",
    label: "THÀNH ĐOÀN PHỔ YÊN",
  },
  {
    value: "HUYỆN ĐỊNH HÓA",
    label: "HUYỆN ĐỊNH HÓA",
  },
  {
    value: "THÀNH PHỐ SÔNG CÔNG",
    label: "THÀNH PHỐ SÔNG CÔNG",
  },
  {
    value: "HUYỆN VÕ NHAI",
    label: "HUYỆN VÕ NHAI",
  },
  {
    value: "BỆNH VIỆN TRUNG ƯƠNG THÁI NGUYÊN",
    label: "BỆNH VIỆN TRUNG ƯƠNG THÁI NGUYÊN",
  },
  {
    value: "GANG THÉP",
    label: "GANG THÉP",
  },
  {
    value: "KIM LOẠI MÀU",
    label: "KIM LOẠI MÀU",
  },
  {
    value: "XI MĂNG QUANG SƠN",
    label: "XI MĂNG QUANG SƠN",
  },
  {
    value: "BAN QUẢN LÝ KHU CÔNG NGHIỆP",
    label: "BAN QUẢN LÝ KHU CÔNG NGHIỆP",
  },
  {
    value: "BCH QUÂN SỰ",
    label: "BCH QUÂN SỰ",
  },
  {
    value: "HUYỆN PHÚ LƯƠNG",
    label: "HUYỆN PHÚ LƯƠNG",
  },
  {
    value: "CÔNG AN TỈNH",
    label: "CÔNG AN TỈNH",
  },
  {
    value: "HUYỆN ĐOÀN ĐẠI TỪ",
    label: "HUYỆN ĐOÀN ĐẠI TỪ",
  },
  {
    value: "HUYỆN ĐỒNG HỦY",
    label: "HUYỆN ĐỒNG HỦY",
  },
  {
    value: "ĐẠI HỌC THÁI NGUYÊN",
    label: "ĐẠI HỌC THÁI NGUYÊN",
  },
  {
    value: "ĐOÀN KHỐI CÁC CƠ QUAN TỈNH",
    label: "ĐOÀN KHỐI CÁC CƠ QUAN TỈNH",
  },
  {
    value: "ĐẠI BIỂU CHỈ ĐỊNH",
    label: "ĐẠI BIỂU CHỈ ĐỊNH",
  },
];

const userOptions = [
  {
    value: "Vũ Thị Lệ",
    label: "Vũ Thị Lệ",
  },
  {
    value: "Dương Văn Hải",
    label: "Dương Văn Hải",
  },
  {
    value: "Dương Văn Duyên",
    label: "Dương Văn Duyên",
  },
  {
    value: "Trương Thị Thùy Châm",
    label: "Trương Thị Thùy Châm",
  },
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
          HỆ THỐNG ĐIỂM DANH
        </Title>
        <Title color="white" textALign="center" fontWeight="bold">
          ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH TỈNH THÁI NGUYÊN
        </Title>
        <Title color="white" textALign="center" fontWeight="bold">
          LẦN THỨ XV, NHIỆM KỲ 2022-2027
        </Title>
      </Detail>

      <CheckInForm>
        <Icon
          onClick={() => {
            navigate("/");
          }}
        />
        <Logo src={logo} width="100px" />
        <Row style={{ width: "100%", maxWidth: "258px" }}>
          <Title>Tên đại biểu:</Title>
          <Cascader
            style={{ width: "100%" }}
            options={userOptions}
            onChange={onUOChange}
            placeholder="Hãy chọn tên đại biểu"
            showSearch={{
              filter,
            }}
            onSearch={(value) => console.log(value)}
          />
        </Row>
        <SizeBox height="20px" />
        <Row style={{ width: "100%", maxWidth: "258px" }}>
          <Title>Đoàn đại biểu:</Title>
          <Cascader
            style={{ width: "100%" }}
            options={delegationOptions}
            onChange={onDOChange}
            placeholder="Hãy chọn đoàn đại biểu"
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
          Điểm Danh
        </Button>
      </CheckInForm>
    </Wrapper>
  );
};

export default CheckIn;
