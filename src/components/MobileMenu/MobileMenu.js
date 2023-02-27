/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <Close className="mobile" onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </Close>
        <MyNav>
          <a href="/sale" className="active">Sale</a><br/>
          <a href="/new">New&nbsp;Releases</a><br/>
          <a href="/men">Men</a><br/>
          <a href="/women">Women</a><br/>
          <a href="/kids">Kids</a><br/>
          <a href="/collections">Collections</a><br/>
        </MyNav>
        <MyFooter>
          <a href="/terms">Terms and Conditions</a><br/>
          <a href="/privacy">Privacy Policy</a><br/>
          <a href="/contact">Contact Us</a><br/>
        </MyFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: end;
  align-items: center;
`

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  min-width: 300px;
  height: 100vh;
  padding: 32px;
`

const MyNav = styled.nav`
  position: absolute;

  top: 0px;
  bottom: 0px;
  left: 32px;

  & a {
    min-width: 100%;
    max-height: 32px;
    margin-bottom: 22px;
    text-decoration: none;

    color: ${COLORS.gray[900]};
    font-size: 18px;
    line-height: 21px;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .active {
    color: ${COLORS.secondary};
  }
`

const MyFooter = styled.footer`
  position: absolute;
  bottom: 32px;
  left: 32px;
  line-height: 14px;

  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-weight: ${WEIGHTS.normal};
    font-size: 14px;
    line-height: 16px;
  }
`

const Close = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 32px;
  color: ${COLORS.gray[900]};
`

export default MobileMenu;
