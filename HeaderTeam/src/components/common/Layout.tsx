import React from "react";
import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
