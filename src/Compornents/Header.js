import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "rgba(200, 0, 0, 1)" : "transparent")};
  transition: all 0.2s ease-in-out;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "https://lunchtime-github.github.io/ReactRouterTest/" || pathname.includes("/movie")}>
        <SLink to="https://lunchtime-github.github.io/ReactRouterTest/">Movies</SLink>
      </Item>
      <Item current={pathname.includes("/tv")}>
        <SLink to="https://lunchtime-github.github.io/ReactRouterTest/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="https://lunchtime-github.github.io/ReactRouterTest/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
