import { cypressConfig } from '@axe-core/watcher';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...cypressConfig({
      axe: {
        apiKey: 'c6b60444-dd62-40b2-8ef2-3dcdcc2edd54',
      },
    }),
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
  },
});
