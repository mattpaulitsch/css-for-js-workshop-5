/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile Menu">
        <Close className="mobile" onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </Close>
        <Filler/>
        <MyNav>
          <a href="/sale" className="active">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MyNav>
        <MyFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
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
  background: hsl(var(--color-gray-700), 0.8);
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

  display: flex;
  flex-direction: column;
`

const MyNav = styled.nav`
  display: flex;
  flex-direction: column;

  & a {
    min-width: 100%;
    max-height: 32px;
    text-decoration: none;

    color: var(--color-gray-900);
    font-size: 18px;
    line-height: 21px;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    
    :not(:last-child) {
      margin-bottom: 22px;
    }
  }

  .active {
    color: var(--color-secondary);
  }
`

const Filler = styled.div`
  flex: 1;
`

const MyFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;

  & a {
    text-decoration: none;
    color: var(--color-gray-700);
    font-weight: var(--font-weight-normal);
    font-size: 14px;
    line-height: 16px;

    :not(:last-child) {
      margin-bottom: 14px;
    }
  }
`

const Close = styled(UnstyledButton)`
  position: absolute;
  padding: 16px;
  top: 10px;
  right: 0px;
  color: var(--color-gray-900);
`

export default MobileMenu;
