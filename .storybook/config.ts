import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js/jsx/ts/tsx
configure(
  require.context('../stories', true, /\.stories\.(js|jsx|ts|tsx)$/),
  module
);
