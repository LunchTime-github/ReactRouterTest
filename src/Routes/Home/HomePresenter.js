import React from "react";
import PropTypes from "prop-types";

import Section from "Compornents/Section";
import Loader from "Compornents/Loader";
import Helmet from "react-helmet";
import { containerStyle, cellStyle } from "Compornents/StyledMixin";
import Message from "Compornents/Message";
import Poster from "../../Compornents/Poster";

const Container = containerStyle;

const Cell = cellStyle;

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Movies | Nomflix</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(
            ({
              id,
              poster_path,
              original_title,
              vote_average,
              release_date
            }) => (
              <Poster
                key={id}
                id={id}
                imageUrl={poster_path}
                title={original_title}
                rating={vote_average}
                year={release_date.split("-")[0]}
                isMovie={true}
              ></Poster>
            )
          )}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="UpComing Movies">
          {upComing.map(
            ({
              id,
              poster_path,
              original_title,
              vote_average,
              release_date
            }) => (
              <Poster
                key={id}
                id={id}
                imageUrl={poster_path}
                title={original_title}
                rating={vote_average}
                year={release_date.split("-")[0]}
                isMovie={true}
              ></Poster>
            )
          )}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(
            ({
              id,
              poster_path,
              original_title,
              vote_average,
              release_date
            }) => (
              <Poster
                key={id}
                id={id}
                imageUrl={poster_path}
                title={original_title}
                rating={vote_average}
                year={release_date.split("-")[0]}
                isMovie={true}
              ></Poster>
            )
          )}
        </Section>
      )}
      {error && <Message text={error} color="#dbdbdb" />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
