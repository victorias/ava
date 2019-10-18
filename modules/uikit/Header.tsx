import * as React from 'react';
import { Fonts, FuturaWeights, MrsEavesWeights, device } from './constants';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  padding: 4rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  ul {
    display: flex;
    font-family: ${Fonts.FUTURA_PT};
    font-weight: ${FuturaWeights.BOOK};
    font-size: 1.6rem;
    flex-basis: 20rem;
  }

  ul:last-child {
    justify-content: flex-end;
    white-space: nowrap;
  }

  li + li {
    margin-left: 2rem;
  }

  h1 {
    text-align: center;
    font-family: ${Fonts.MRS_EAVES};
    font-weight: ${MrsEavesWeights.ROMAN};
    font-size: 3.6rem;
    white-space: nowrap;
  }

  ul:first-child {
    display: none;
  }

  @media ${device.tablet} {
    ul:first-child {
      display: flex;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>Shop</li>
        <li>Try</li>
        <li>Designers</li>
        <li>Insta</li>
      </ul>
      <h1>ava bridal</h1>
      <ul>
        <li>Cart (0)</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
