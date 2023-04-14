{
  const { setImportBuildGetters } = require('../../node_modules/vite-plugin-ssr/dist/cjs/node/runtime/globalContext/loadImportBuild.js');
  setImportBuildGetters({
    pageFiles: () => import('./pageFiles.mjs'),
    clientManifest: () => require('../client/manifest.json'),
    pluginManifest: () => require('../client/vite-plugin-ssr.json'),
  });
}
