import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
  columns?: Number;
  gridTemplateAreas?: string;
  gap?: Number;
}

export const GUTTER = 2; // em
const WRAPPER = '100%';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: Props) => `${props.columns}` || '12'},
    1fr
  );
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-gap: ${(props: Props) => `${props.gap}` || `0`}em;
  max-width: ${WRAPPER};
  grid-template-areas: ${(props: Props) => props.gridTemplateAreas || 'unset'};
`;

export default Grid;
