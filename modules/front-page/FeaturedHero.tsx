import * as React from 'react';
import Grid, { GUTTER } from '../uikit/Grid';
import { Fonts, FuturaWeights, Colors } from '../uikit/constants';

const FeaturedHero = () => (
  <section className="container">
    <Grid className="inner">
      <h2>Wedding dresses for the modern bride</h2>
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
        padding: ${GUTTER}em;
      }

      h2 {
        font-family: ${Fonts.FUTURA_PT};
        font-weight: ${FuturaWeights.BOOK};
        font-size: 4.8rem;
        grid-column: span 5;
        color: ${Colors.WHITE};
      }
    `}</style>
  </section>
);

export default FeaturedHero;
