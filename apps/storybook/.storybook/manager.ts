import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'SNUiLab',
  brandUrl: 'https://your-website.com',
  brandImage: '/logo.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
}); 