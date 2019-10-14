import Header from '../modules/uikit/Header';
import FeaturedHero from '../modules/front-page/FeaturedHero';
import Grid from '../modules/uikit/Grid';
import Head from '../modules/uikit/Head';
import Story from '../modules/front-page/Story';
import Showcase from '../modules/front-page/Showcase';

const Index = () => {
  return (
    <div className="root">
      <Head />
      <Header />
      <Grid
        columns={1}
        gridTemplateAreas={`
        "hero"
        "story"
        "showcase"
      `}
      >
        <FeaturedHero gridArea="hero" />
        <Story gridArea="story" />
        <Showcase gridArea="showcase" />
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
