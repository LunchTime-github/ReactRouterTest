import React from "react";
import PropTypes from "prop-types";

import Section from "Compornents/Section";
import Loader from "Compornents/Loader";
import Helmet from "react-helmet";
import { containerStyle, cellStyle } from "Compornents/StyledMixin";
import Message from "Compornents/Message";
import Poster from "Compornents/Poster";

const Container = containerStyle;

const Cell = cellStyle;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>TV Shows | Nomflix</title>
      </Helmet>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(
            ({ id, poster_path, name, vote_average, first_air_date }) => (
              <Poster
                key={id}
                id={id}
                imageUrl={poster_path}
                title={name}
                rating={vote_average}
                year={first_air_date.split("-")[0]}
              ></Poster>
            )
          )}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(
            ({ id, poster_path, name, vote_average, first_air_date }) => (
              <Poster
                key={id}
                id={id}
                imageUrl={poster_path}
                title={name}
                rating={vote_average}
                year={first_air_date.split("-")[0]}
              ></Poster>
            )
          )}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map(
            ({ id, poster_path, name, vote_average, first_air_date }) => (
              <Poster
                key={id}
                id={id}
                imageUrl={poster_path}
                title={name}
                rating={vote_average}
                year={first_air_date.split("-")[0]}
              ></Poster>
            )
          )}
        </Section>
      )}
      {error && <Message text={error} color="#95a5a6" />}
    </Container>
  );

TVPresenter.propTypes = {
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
