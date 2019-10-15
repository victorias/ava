import * as React from 'react';
import { GUTTER } from '../uikit/Grid';
import { Fonts, FuturaWeights, Colors } from '../uikit/constants';
import Button from '../uikit/Button';
import styled from 'styled-components';

interface Props {
  gridArea: string;
}

const HeroSection = styled.section`
  background-image: url(${require('./images/theLaw.png')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-area: ${(props: Props) => props.gridArea};
  height: 560px;
  padding: ${2 * GUTTER}em;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h2 {
    font-family: ${Fonts.FUTURA_PT};
    font-weight: ${FuturaWeights.BOOK};
    font-size: 4.8rem;
    color: ${Colors.WHITE};
    line-height: 1.2;
    grid-area: title;
    margin-bottom: ${2 * GUTTER}rem;
  }
`;

const FeaturedHero = ({ gridArea }: Props) => (
  <HeroSection gridArea={gridArea}>
    <div>
      <h2>
        Wedding dresses <br />
        for the modern bride
      </h2>
      <Button className="button" onClick={() => null}>
        Spring 2020 Collection
      </Button>
    </div>
  </HeroSection>
);

export default FeaturedHero;
