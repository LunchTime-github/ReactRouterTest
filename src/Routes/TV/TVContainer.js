import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular }
      } = await tvApi.popular();

      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();

      this.setState({
        popular,
        topRated,
        airingToday
      });
    } catch {
      this.setState({
        error: "Can't Find Movies Infomation."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { popular, topRated, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
