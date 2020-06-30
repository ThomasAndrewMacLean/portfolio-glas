import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { T } from '../components';

const Layout = ({ children, page }) => {
  return (
    <Main>
      <Head>
        <title>ilseVANROY</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Header>
        <T translationKey="title"></T>
        <nav>
          <ul>
            <li>
              <NavLink active={page === 'home'} href="/">
                <T translationKey="homeTitle"></T>
              </NavLink>
            </li>
            <li>
              <NavLink active={page === 'work'} href="/work">
                <T translationKey="workTitle"></T>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      {children}
      <Footer>
        <div>facebook</div>
        <address>contact</address>
      </Footer>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
`;
const Header = styled.header`
  h1 {
    font-weight: 100;
  }
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  nav {
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: unset;
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: 100%;
    height: 3px;
    background: black;
  }
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

export default Layout;
