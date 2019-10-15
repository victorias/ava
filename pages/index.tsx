import Header from '../modules/uikit/Header';
import FeaturedHero from '../modules/front-page/FeaturedHero';
import Grid from '../modules/uikit/Grid';
import Head from '../modules/uikit/Head';
import Story from '../modules/front-page/Story';
import Showcase from '../modules/front-page/Showcase';
import Footer from '../modules/uikit/Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridHero = styled(FeaturedHero)`
  grid-area: hero;
`;

const GridStory = styled(Story)`
  grid-area: story;
`;

const GridShowcase = styled(Showcase)`
  grid-area: showcase;
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
`;

const Index = () => {
  return (
    <Container>
      <Head />
      <Header />
      <Grid
        columns={1}
        gridTemplateAreas={`
        "hero"
        "story"
        "showcase"
        "footer"
      `}
      >
        <GridHero />
        <GridStory />
        <GridShowcase />
        <GridFooter />
      </Grid>
    </Container>
  );
};

export default Index;
