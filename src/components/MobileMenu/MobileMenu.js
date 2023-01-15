/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <ModalOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <ModalContent>
        <ButtonWrapper>
          <button onClick={onDismiss}>
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
            <Icon id="close" />
          </button>
        </ButtonWrapper>
        <Nav>
          <NavLink active href="/sale">
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer as="footer">
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalContent = styled(DialogContent)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  padding-block: 26px;
  top: 0;
  right: 0;
  background-color: ${COLORS.white};
  width: 80%;
  height: 100%;
`;

const ModalOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.gray["transparent"]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    /* margin-left: auto; */
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled(Nav)``;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none;
  text-transform: uppercase;

  ${(props) =>
    props.active &&
    `
     color: ${COLORS.secondary};
     font-weight: ${WEIGHTS.medium}
  `}
`;

export default MobileMenu;
