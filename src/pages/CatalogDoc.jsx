import { Avatar, List } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CatalogContext } from "../contexts/catalog.provider";
import { Container } from "./styled";
import pdf_icon from "../assets/images/pdf_icon.png";
const CatalogDoc = () => {
  const { catalogs } = useContext(CatalogContext);
  const navigate = useNavigate();
  return (
    <Container>
      <List
        itemLayout="horizontal"
        dataSource={catalogs}
        style={{ marginLeft: 10 }}
        renderItem={(item) => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/van-kien-dai-hoi/${item._id}`);
            }}
          >
            <List.Item.Meta
              avatar={<Avatar shape="square" size={"large"} src={pdf_icon} />}
              title={item._name}
              description={item._des}
            />
          </List.Item>
        )}
      />
    </Container>
  );
};

export default CatalogDoc;
