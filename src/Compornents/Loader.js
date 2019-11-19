import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-top: 80px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="loading">
      ⏳
    </span>
  </Container>
);
