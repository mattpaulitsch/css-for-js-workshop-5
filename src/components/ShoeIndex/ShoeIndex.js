import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <MySpacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media(${QUERIES.tablet}) {
    flex-wrap: wrap;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media(${QUERIES.tablet}) {
    order: 1;
    flex-basis: 100vw;
  }
`;

const MainColumn = styled.div`
  flex: 1;

  @media(${QUERIES.tablet}) {
    order: 2;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const MySelect = styled(Select)`
  @media(${QUERIES.tablet}) {
    display: none;
  }
`;

const MySpacer = styled(Spacer)`
  @media(${QUERIES.tablet}) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
