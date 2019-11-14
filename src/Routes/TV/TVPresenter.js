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

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => <Cell>{show.name}</Cell>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(show => <Cell>{show.name}</Cell>)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map(show => <Cell>{show.name}</Cell>)}
        </Section>
      )}
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
