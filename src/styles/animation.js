import { keyframes } from 'styled-components';

const fade_in = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const fade_out = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
`;

const animation = { fade_in, fade_out };

export default animation;
