import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import { Layout } from 'src/layouts';
import sketch from 'src/resources/works/1';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Work: React.FCX = ({ className }) => (
  <main className={className}>
    <P5Canvas sketch={sketch} />
  </main>
);

const StyledWork = styled(Work)`
  ${baseStyle};
  ${standardCanvasStyle};
`;

export default () => (
  <Layout>
    <SEO title='Work1' pathname='/works/1' />
    <StyledWork />
  </Layout>
);
