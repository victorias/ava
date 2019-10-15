import * as React from 'react';
import styled from 'styled-components';
import Grid from '../uikit/Grid';
import Button from '../uikit/Button';
import { Fonts, FuturaWeights, Colors } from '../uikit/constants';

interface ItemProps {
  image: any;
  gridArea: string;
  height: number;
}

const Item = styled.div`
  display: flex;
  background-image: url(${(props: ItemProps) => props.image});
  grid-area: ${(props: ItemProps) => props.gridArea};
  height: ${(props: ItemProps) => props.height}px;
  justify-content: space-around;
  align-items: center;
  background-size: cover;
  background-position: center top;
  position: relative;
`;

const ItemTitle = styled.h3`
  font-family: ${Fonts.FUTURA_PT};
  font-weight: ${FuturaWeights.DEMI};
  position: absolute;
  top: 4rem;
  left: 4rem;
  text-transform: uppercase;
  color: ${Colors.WHITE};
  font-size: 2.4rem;
`;
interface Props {
  gridArea: string;
}

// row heights
const FIRST = 484;
const SECOND = 600;

const Showcase = () => (
  <Grid
    columns={3}
    gridTemplateAreas={`
    "rime rime lihi"
    "law law law"
`}
  >
    <Item height={FIRST} image={require('./images/rime.png')} gridArea="rime">
      <ItemTitle>Stardust</ItemTitle>
      <Button onClick={() => null}>More by Rime Adoraky</Button>
    </Item>
    <Item height={FIRST} image={require('./images/lihi.png')} gridArea="lihi">
      <ItemTitle>Madison</ItemTitle>
      <Button onClick={() => null}>More by Lihi Hod</Button>
    </Item>
    <Item
      height={SECOND}
      image={require('./images/the-law-2.png')}
      gridArea="law"
    >
      <ItemTitle>Piper</ItemTitle>
      <Button onClick={() => null}>More by The Law</Button>
    </Item>
  </Grid>
);

export default Showcase;
