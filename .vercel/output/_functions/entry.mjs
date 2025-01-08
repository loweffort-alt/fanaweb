import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DYFJVljw.mjs';
import { manifest } from './manifest_BPDXjn38.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/actions/send-email.astro.mjs');
const _page2 = () => import('./pages/templates/01.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/actions/send-email.ts", _page1],
    ["src/pages/templates/01.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4dbe6ad8-ae06-4ef3-83aa-8a90fe070f09",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
