import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PostContext } from "../contexts/post.provider";
import { BaseBody } from "./styled";

const Wrapper = styled.div`
  display: block;
  max-width: 700px;
  background: #fff;
  padding: 10px;
`;

const Title = styled.div`
  color: #194ce6;
  text-align: justify;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Time = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

const Introduce = () => {
  const renderHTML = (escapedHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: escapedHTML },
    });
  const { posts } = useContext(PostContext);

  const [content, setContent] = useState();

  useEffect(() => {
    posts?.forEach((post) => {
      if (post._category === "introduce") {
        setContent(post);
      }
    });
  }, [posts]);

  return (
    <BaseBody>
      <Wrapper>
        <Title>{content?._title}</Title>
        <Time>{content?._time}</Time>
        {renderHTML(content?._content)}
      </Wrapper>
    </BaseBody>
  );
};

export default Introduce;
