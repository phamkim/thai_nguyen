import { Button, Col, Divider, Drawer, Image, Row } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth.provider";
import { BaseTitle } from "../../pages/styled";

const Profile = () => {
  const { user, resetUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Avatar src={user?._avatar} sizes="45px" onClick={showDrawer} />
      <Drawer
        title="Thông tin người dùng"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <DrawerBody>
          <AvatarPreview src={user?._avatar} sizes="70px" />
          <Divider />
          <Infor>
            <Row>
              <Label flex="150px">Họ tên:</Label>
              <Col flex="auto">
                <Title>{user?._name}</Title>
              </Col>
            </Row>
            <Row>
              <Label flex="150px">Năm sinh:</Label>
              <Col flex="auto">
                <Title>{user?._birthday}</Title>
              </Col>
            </Row>
            <Row>
              <Label flex="150px">Giới Tính:</Label>
              <Col flex="auto">
                <Title>{user?._gender}</Title>
              </Col>
            </Row>
            <Row>
              <Label flex="150px">Vị trí ngồi:</Label>
              <Col flex="auto">
                <Title>{user?._seat_position}</Title>
              </Col>
            </Row>
          </Infor>
          <Divider />
          {user?._role === "admin" ? (
            <>
              <Button
                onClick={() => {
                  navigate("/admin");
                }}
              >
                Quản lý
              </Button>
              <Divider />
            </>
          ) : null}
          <Button onClick={resetUser}>Đăng xuất</Button>
        </DrawerBody>
      </Drawer>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  height: ${(props) => props.sizes};
  width: ${(props) => props.sizes};
  border-radius: 50%;
`;

const AvatarPreview = styled(Image)`
  height: 100%;
  width: 100%;
  max-height: 200px;
  max-width: 300px;
`;

const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  padding-left: 20px;
  color: #747272;
`;
const Label = styled(Col)`
  display: flex;
  justify-content: end;
`;

const Infor = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
`;
