import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefaultPresenter = ({ result, loading, error }) => null;

DefaultPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DefaultPresenter;
