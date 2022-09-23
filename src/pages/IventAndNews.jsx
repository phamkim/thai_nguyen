import { List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "../contexts/post.provider";
import { Container } from "./styled";


const IventAndNews = () => {
  const { posts } = useContext(PostContext);
  const [news, setNews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    var _news = [];
    posts?.forEach((post) => {
      if (post._category === "news") {
        _news.push(post);
      }
    });
    setNews(_news);
  }, [posts]);

  return (
    <Container>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={news}
        style={{ marginLeft: 10 }}
        renderItem={(item) => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/tin-tuc/${item._id}`);
            }}
            extra={
              <img width={272} alt="anh-tieu-de" src={item?._img_preview} />
            }
          >
            <List.Item.Meta
              title={<P>{item._title}</P>}
              description={item._time}
            />
          </List.Item>
        )}
      />
    </Container>
  );
};

export default IventAndNews;

const P = styled.p`
  text-align: justify;
  font-size: larger;
  color: #0058c0;
`;
