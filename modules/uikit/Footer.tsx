import * as React from 'react';
import styled from 'styled-components';
import { Fonts, FuturaWeights } from './constants';

const StyledFooter = styled.footer`
  display: flex;
  padding: 6rem 4rem;
  justify-content: space-between;

  ul {
    display: flex;
    font-family: ${Fonts.FUTURA_PT};
    font-weight: ${FuturaWeights.BOOK};
    font-size: 1.6rem;
  }

  li + li {
    margin-left: 2rem;
  }
`;

export default () => (
  <StyledFooter>
    <ul>
      <li>Shipping</li>
      <li>Returns</li>
      <li>Sizing</li>
    </ul>

    <ul>
      <li>Contact</li>
    </ul>
  </StyledFooter>
);
