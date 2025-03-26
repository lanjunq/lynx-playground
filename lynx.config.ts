import { defineConfig } from '@lynx-js/rspeedy';

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
  ],
  source: {
    entry: {
      // empty: './src/index.tsx',
      evening_routine: './cards/evening-routine/src/index.tsx',
      morning_routine: './cards/morning-routine/src/index.tsx',
      welcome: './cards/welcome/src/index.tsx',
    },
  },
});
