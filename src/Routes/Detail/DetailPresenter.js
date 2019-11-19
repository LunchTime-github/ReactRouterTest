import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Compornents/Loader";

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: calc(100% + 30px);
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
`;

const Cover = styled.div`
  width: 30%;
  padding-top: 42.428%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 16px;
`;

const Devider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.div`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.8;
  width: 50%;
`;

const DefaultPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title
            ? result.original_title
            : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/w300${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        ></Cover>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Devider>·</Devider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Devider>·</Devider>
            <Item>
              {result.imdb_id ? `${result.imdb_id}` : "Not Link"}
            </Item>
            <Devider>·</Devider>
            <Item>
              {result.genres &&
                result.genres.map(
                  (genre, index) =>
                    `${genre.name}${
                      index === result.genres.length - 1 ? "" : " / "
                    }`
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview && result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DefaultPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DefaultPresenter;
