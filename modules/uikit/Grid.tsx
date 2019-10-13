import * as React from 'react';
import classnames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const GUTTER = 2; // em
const WRAPPER = '100%';
const ROW_HEIGHT = `calc(${WRAPPER} - 11 * ${GUTTER}rem)`;

const Grid = ({ children, className }: Props) => (
  <div className={classnames('grid', className)}>
    {children}
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: minmax(${ROW_HEIGHT}, auto);
        grid-auto-flow: row;
        grid-gap: ${GUTTER}em;
        margin: 0 auto;
        max-width: ${WRAPPER};
      }
    `}</style>
  </div>
);

export default Grid;
