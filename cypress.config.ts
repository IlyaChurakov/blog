import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/cypress',
    overwrite: true,
    html: true,
  },
});
