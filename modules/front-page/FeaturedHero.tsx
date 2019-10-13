import * as React from 'react';
import Grid, { GUTTER } from '../uikit/Grid';
import { Fonts, FuturaWeights, Colors } from '../uikit/constants';
import Button from '../uikit/Button';

const FeaturedHero = () => (
  <section className="container">
    <Grid className="inner">
      <h2>
        Wedding dresses <br />
        for the modern bride
      </h2>
      <Button className="button" onClick={() => null}>
        Spring 2020 Collection
      </Button>
    </Grid>
    <style jsx>{`
      .container {
        grid-column: span 12;
        background-image: url(${require('./images/theLaw.png')});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .inner {
        padding: ${2 * GUTTER}em;
      }

      h2 {
        font-family: ${Fonts.FUTURA_PT};
        font-weight: ${FuturaWeights.BOOK};
        font-size: 4.8rem;
        grid-column: span 5;
        color: ${Colors.WHITE};
        line-height: 1.2;
      }

      .button {
        grid-column-start: 1;
        grid-row-start: 2;
        grid-column: span 4;
      }
    `}</style>
  </section>
);

export default FeaturedHero;
