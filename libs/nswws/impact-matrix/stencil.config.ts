import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'nswws-imact-matrix',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    angularOutputTarget({
      componentCorePackage: '@nx-test/nswws-impact-matrix',
      directivesProxyFile:
        '../../../../libs/nswws-impact-matrix-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../../libs/nswws-impact-matrix-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
