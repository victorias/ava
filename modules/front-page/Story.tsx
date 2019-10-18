import * as React from 'react';
import Grid, { GUTTER } from '../uikit/Grid';
import { Fonts, FuturaWeights, Colors, device } from '../uikit/constants';
import styled from 'styled-components';

const StorySection = styled.section`
  padding: ${3.5 * GUTTER}rem ${2 * GUTTER}rem;

  h2 {
    font-family: ${Fonts.FUTURA_PT};
    font-weight: ${FuturaWeights.BOOK};
    line-height: 1.2;
    color: ${Colors.BLACK};
    grid-column: span 6;
    grid-area: title;
    align-self: center;
    font-size: 4.8rem;
  }

  p {
    grid-area: body;
    font-family: ${Fonts.FUTURA_PT};
    font-weight: ${FuturaWeights.BOOK};
    line-height: 1.2;
    color: ${Colors.BLACK};
    font-size: 1.6rem;
  }
`;

const StyledGrid = styled(Grid)`
  grid-template-areas:
    'title title'
    'body body';

  @media ${device.mobileL} {
    grid-template-areas: 'title body';
  }
`;

const Story = () => (
  <StorySection>
    <StyledGrid
      columns={2}
      gridTemplateAreas={`
        "title title"
        "body body"
      `}
      gap={5}
    >
      <h2>Say yes to the dress at home</h2>
      <p>
        We don’t think you need a sales consultant looking over your shoulder to
        find the perfect wedding dress. The Ava bride is unafraid, highly
        opinionated, and ready for what’s next. Shop couture wedding gowns by
        the internet’s most sought-after designers. Try samples on at home.
        Receive your custom tailored dress, made-to-order.
      </p>
    </StyledGrid>
  </StorySection>
);

export default Story;
