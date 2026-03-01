import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: 'https://kitani.github.io',
  base: isGitHubActions ? '/portfolio' : '/',
  integrations: []
});
