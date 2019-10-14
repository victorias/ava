import Header from '../modules/uikit/Header';
import FeaturedHero from '../modules/front-page/FeaturedHero';
import Grid from '../modules/uikit/Grid';
import Head from '../modules/uikit/Head';
import Story from '../modules/front-page/Story';

const Index = () => {
  return (
    <div className="root">
      <Head />
      <Header />
      <Grid
        columns={3}
        gridTemplateAreas={`
        "hero hero hero"
        "story story story"
      `}
      >
        <FeaturedHero gridArea="hero" />
        <Story gridArea="story" />
      </Grid>
      <style jsx>
        {`
          .root {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
