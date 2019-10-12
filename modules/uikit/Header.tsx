import * as React from 'react';
import { Fonts, FuturaWeights, MrsEavesWeights } from './constants';

const Header = () => {
  return (
    <header className="header">
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
      <style jsx>{`
        .header {
          display: flex;
          width: 100vw;
          padding: 4rem;
          justify-content: space-between;
          align-items: center;
        }

        ul {
          display: flex;
          font-family: ${Fonts.FUTURA_PT};
          font-weight: ${FuturaWeights.BOOK};
          font-size: 1.6rem;
        }

        li + li {
          margin-left: 20px;
        }

        h1 {
          text-align: center;
          font-family: ${Fonts.MRS_EAVES};
          font-weight: ${MrsEavesWeights.ROMAN};
          font-size: 3.6rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
