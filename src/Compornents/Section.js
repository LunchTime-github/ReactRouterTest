import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const Grid = styled.div`
  margin: 25px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  childrenL: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
