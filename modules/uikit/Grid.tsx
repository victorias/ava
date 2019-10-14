import * as React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  columns?: Number;
  gridTemplateAreas?: string;
}

export const GUTTER = 2; // em
const WRAPPER = '100%';
const ROW_HEIGHT = `calc(${WRAPPER} - 11 * ${GUTTER}em)`;

const Grid = ({
  children,
  columns = 12,
  gridTemplateAreas = 'unset',
}: Props) => (
  <div className="grid">
    {children}
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-auto-rows: auto;
        grid-auto-flow: row;
        grid-gap: ${GUTTER}em;
        margin: 0 auto;
        max-width: ${WRAPPER};
        grid-template-areas: ${gridTemplateAreas};
      }
    `}</style>
  </div>
);

export default Grid;
