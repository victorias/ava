import * as React from 'react';
import Grid, { GUTTER } from '../uikit/Grid';
import { Fonts, FuturaWeights, Colors } from '../uikit/constants';

interface Props {
  gridArea: string;
}

const Story = ({ gridArea }: Props) => (
  <>
    <section>
      <Grid
        columns={2}
        gridTemplateAreas={`
        "title body"
      `}
      >
        <h2>Say yes to the dress at home</h2>
        <p>
          Tempor ut sunt duis est laboris ut velit ex reprehenderit. Culpa
          tempor ex do consequat qui ut et amet non nostrud fugiat. Eiusmod
          fugiat qui consectetur proident consequat velit ipsum. Anim enim
          nostrud sint irure occaecat cillum est consequat culpa ad elit Lorem
          esse nisi. Ad excepteur sit voluptate laborum nisi anim ea. Cillum
          tempor duis aute sit amet amet et est consectetur est aliqua mollit.
        </p>
      </Grid>
    </section>
    <style jsx>{`
      section {
        grid-column: span 12;
        grid-area: ${gridArea};
        padding: ${3.5 * GUTTER}rem ${2 * GUTTER}rem;
      }

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
    `}</style>
  </>
);

export default Story;