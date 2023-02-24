import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { QUERIES } from '../../constants.js'

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
  background: pink;

  @media(${QUERIES.laptop}) {
    background: red;
  }

  @media(${QUERIES.tablet}) {
    background: green;
  }

  @media(${QUERIES.phone}) {
    background: yellow;
  }
`;

export default App;
