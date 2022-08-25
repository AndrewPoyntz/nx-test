import { newSpecPage } from '@stencil/core/testing';
import { ImpactMatrix } from './impact-matrix.component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ImpactMatrix],
      html: '<impact-matrix></impact-matrix>',
    });
    expect(root).toMatchSnapshot();
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ImpactMatrix],
      html: `<impact-matrix impact="2" likelihood="4"></impact-matrix>`,
    });
    expect(root).toMatchSnapshot();
  });
});
