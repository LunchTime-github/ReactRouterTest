import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { containerStyle } from "Compornents/StyledMixin";
import Loader from "Compornents/Loader";
import Section from "Compornents/Section";
import Message from "Compornents/Message";
import Poster from "Compornents/Poster";

const Container = containerStyle;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 30px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  loading,
  error,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or Tv Shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(
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
                  year={release_date && release_date.split("-")[0]}
                  isMovie={true}
                ></Poster>
              )
            )}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(
              ({ id, poster_path, name, vote_average, first_air_date }) => (
                <Poster
                  key={id}
                  id={id}
                  imageUrl={poster_path}
                  title={name}
                  rating={vote_average}
                  year={first_air_date && first_air_date.split("-")[0]}
                ></Poster>
              )
            )}
          </Section>
        )}
        {error && <Message text={error} color="#95a5a6" />}
        {movieResults && tvResults && movieResults < 1 && tvResults < 1 && (
          <Message text={`Nothing Found`} color="#95a5a6" />
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateTerm: PropTypes.func
};

export default SearchPresenter;
