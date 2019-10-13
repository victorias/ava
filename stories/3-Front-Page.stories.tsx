import * as React from 'react';
import _FeaturedHero from '../modules/front-page/FeaturedHero';
import Grid from '../modules/uikit/Grid';

export default {
  title: 'Front Page',
};

export const FeaturedHero = () => (
  <Grid>
    <_FeaturedHero />
  </Grid>
);
