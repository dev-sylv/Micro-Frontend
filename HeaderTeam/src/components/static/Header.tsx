import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Module Federation</Logo>
          <NavHolder>
            <Nav to="">Data Fetching</Nav>
            <Nav to="/todo">Todo</Nav>
            <Nav to="/state-management">State Management</Nav>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Logo = styled.div`
  font-weight: 900;
  font-size: 30px;
`;
const Nav = styled(Link)`
  text-decoration: none;
  margin: 0 5px;
  font-weight: bold;
  transition: all 350ms;
  color: white;

  :hover {
    cursor: pointer;
    transform: translate(0px, -5px);
  }
`;
const NavHolder = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #234696;
  border-bottom: 3px solid silver;
  color: white;
`;
