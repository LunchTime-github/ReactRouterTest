import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "Compornents/Section";
import Loader from "Compornents/Loader";

const Container = styled.div`
  padding: 80px 10px 0;
`;

const Cell = styled.div`
  padding: 15px;
`

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => <Cell>{movie.title}</Cell>)}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="UpComing Movies">
          {upComing.map(movie => <Cell>{movie.title}</Cell>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => <Cell>{movie.title}</Cell>)}
        </Section>
      )}
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
