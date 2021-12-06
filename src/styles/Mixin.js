import { css, keyframes } from 'styled-components';

export const fade_in = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

export const fade_out = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
`;
