import * as React from 'react';
import styled from 'styled-components';
import Grid from '../uikit/Grid';
import Button from '../uikit/Button';

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
  background-position: center;
`;

interface Props {
  gridArea: string;
}

const ShowcaseGrid = styled(Grid)`
  grid-area: ${(props: Props) => props.gridArea};
`;

// row heights
const FIRST = 484;
const SECOND = 600;

const Showcase = ({ gridArea }: Props) => (
  <ShowcaseGrid
    gridArea={gridArea}
    columns={3}
    gridTemplateAreas={`
    "rime rime lihi"
    "law law law"
  `}
  >
    <Item height={FIRST} image={require('./images/rime.png')} gridArea="rime">
      <Button onClick={() => null}>More by Rime Adoraky</Button>
    </Item>
    <Item height={FIRST} image={require('./images/lihi.png')} gridArea="lihi">
      <Button onClick={() => null}>More by Lihi Hod</Button>
    </Item>
    <Item
      height={SECOND}
      image={require('./images/the-law-2.png')}
      gridArea="law"
    >
      <Button onClick={() => null}>More by The Law</Button>
    </Item>
  </ShowcaseGrid>
);

export default Showcase;
