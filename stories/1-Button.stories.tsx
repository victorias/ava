import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../modules/uikit/Button';

export default {
  title: 'Button',
};

export const text = () => (
  <div style={{ backgroundColor: 'grey' }}>
    <Button onClick={action('clicked')}>Hello Button</Button>
  </div>
);
