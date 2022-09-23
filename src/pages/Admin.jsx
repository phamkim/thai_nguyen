import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const Admin = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Điểm danh",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: "75vh",
              }}
            >
              content
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            HỆ THỐNG QUẢN LÝ ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH TỈNH THÁI
            NGUYÊN LẦN THỨ XV, NHIỆM KỲ 2022-2027
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Admin;
