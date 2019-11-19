import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 14px;
  padding: 8px;
`;

const Image = styled.div`
  background-image: url(${props => `${props.bgUrl}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 141.428%;
`;

const Rating = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.2s ease-out;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 16px;
  padding: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
  border-radius: 4px;
  overflow: hidden;
  &:hover ${Rating} {
    opacity: 1;
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 8px;
`;

const Year = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png")} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.prppTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  isMovie: PropTypes.bool.isRequired
};

export default Poster;
