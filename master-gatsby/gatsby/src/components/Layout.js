import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <SiteBorderStyles>
          <Nav />
          {children}
          <Footer />
        </SiteBorderStyles>
      </ContentStyles>
    </>
  );
}
