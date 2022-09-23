import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "../../contexts/post.provider";
import { BaseBody } from "../../pages/styled";

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

const MyContent = () => {
  const renderHTML = (escapedHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: escapedHTML },
    });
  const { posts } = useContext(PostContext);
  const params = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    posts?.forEach((post) => {
      if (post._id === params.id) {
        console.log(post._url)
        setContent(post);
      }
    });
  }, [params.id, posts]);

  return (
    <BaseBody>
      <Wrapper>
        <Title>{content?._title}</Title>
        <Time>{content?._time}</Time>
        {content?._url !== "" ? <Iframe src={content?._url} /> : null}
        {renderHTML(content?._content)}
      </Wrapper>
    </BaseBody>
  );
};

export default MyContent;

const Iframe = styled.iframe`
  height: 500px;
  width: 100%;
  max-width: 700px;
`;
