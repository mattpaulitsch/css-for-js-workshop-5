import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton className="mobile">
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton className="mobile">
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton className="mobile" onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
        <Side className="hide-on-mobile"/>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media(${QUERIES.phone}) {
    padding: 16px;
  }

  @media(${QUERIES.tablet}) {
    border-top: solid 6px;
    border-color: ${COLORS.gray[900]};
    align-items: center;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media(${QUERIES.tablet}) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media(${QUERIES.tablet}) {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  @media(${QUERIES.phone}) {
    &:not(:last-of-type) {
      gap: 24px;
    }
  }
`

const Side = styled.div`
  flex: 1;

  @media(${QUERIES.tablet}) {
    &.hide-on-mobile {
      flex: 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
