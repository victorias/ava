import * as React from 'react';
import { Fonts, FuturaWeights, Colors } from './constants';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  padding: 1.3rem 2rem;
  font-size: 2.4rem;
  font-family: ${Fonts.FUTURA_PT};
  font-weight: ${FuturaWeights.BOOK};
  border: 2px ${Colors.WHITE};
  color: ${Colors.WHITE};
  border-radius: 4px;
  background-color: transparent;
  border-style: solid;

  :hover {
    cursor: pointer;
  }
`;

export default Button;
