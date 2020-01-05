import { css } from '@emotion/core';

export const standardCanvasStyle = css`
  div {
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw !important;
      height: 100vh !important;
      z-index: -1;
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default standardCanvasStyle;
