import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D9KlWRJy.mjs';
import { manifest } from './manifest_BYkpNjUw.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page4 = () => import('./pages/articles.astro.mjs');
const _page5 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page6 = () => import('./pages/case-studies/_id_.astro.mjs');
const _page7 = () => import('./pages/case-studies.astro.mjs');
const _page8 = () => import('./pages/pricing.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/api/search.json.ts", _page3],
    ["src/pages/articles/index.astro", _page4],
    ["src/pages/articles/[...slug].astro", _page5],
    ["src/pages/case-studies/[id].astro", _page6],
    ["src/pages/case-studies.astro", _page7],
    ["src/pages/pricing.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ceefe954-35cd-4156-9c1e-4c9a6b7d98ce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
