import * as React from 'react';
import { GUTTER } from '../uikit/Grid';
import { Fonts, FuturaWeights, Colors } from '../uikit/constants';
import Button from '../uikit/Button';

interface Props {
  gridArea: string;
}

const FeaturedHero = ({ gridArea }: Props) => (
  <section className="container">
    <div>
      <h2>
        Wedding dresses <br />
        for the modern bride
      </h2>
      <Button className="button" onClick={() => null}>
        Spring 2020 Collection
      </Button>
    </div>
    <style jsx>{`
      .container {
        background-image: url(${require('./images/theLaw.png')});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        grid-area: ${gridArea};
        height: 560px;
        padding: ${2 * GUTTER}em;
        display: flex;
        align-items: center;
      }

      div {
        display: flex;
        flex-direction: column;
      }

      h2 {
        font-family: ${Fonts.FUTURA_PT};
        font-weight: ${FuturaWeights.BOOK};
        font-size: 4.8rem;
        color: ${Colors.WHITE};
        line-height: 1.2;
        grid-area: title;
      }

      .button {
        flex: 0 0 auto;
      }
    `}</style>
  </section>
);

export default FeaturedHero;
