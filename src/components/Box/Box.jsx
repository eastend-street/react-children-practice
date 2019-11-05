import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #eee;
  margin: 2rem 0;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 0.5rem;
`;

const Text = styled.div`
  font-weight: bold;
`;

const Box = ({ imageUrl, text }) => {
  return (
    <Container>
      <Icon src={imageUrl} alt="icon" />
      <Text>{text}</Text>
    </Container>
  );
};

export default Box;
