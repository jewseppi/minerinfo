import { css } from 'styled-components';

export const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
  smallPhone: 414,
  iphone6: 375,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  return {
    ...acc,
    [label]: (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `,
  };
}, {});

export const breakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const colours = {
  background: '#000',
  white: '#fff',
  black: '#000',
};

export const fonts = {
  sanFrancisco: '"SF UI Text", "Roboto", sans-serif',
};

export const shadows = {
  small: '0 2px 4px rgba(0, 0, 0, 0.15)',
  container: '0 1px 10px 0 rgba(0,0,0,0.15)',
  navbar: '0 1px 0 0 #e6e6e6',
};

export const gutter = '20px';

export const blur = 'blur(4px)';

export default {
  breakpoints,
  colours,
  fonts,
  shadows,
  gutter,
  blur,
};
