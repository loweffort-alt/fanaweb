import { c as createComponent, r as renderTemplate, a as renderHead, b as renderScript } from '../../chunks/astro/server_BEPFBVGG.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$01 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Templates</title>${renderHead()}</head> <body> <div id="container"></div> ${renderScript($$result, "/home/loweffort/Escritorio/fanaweb/src/pages/templates/01.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "/home/loweffort/Escritorio/fanaweb/src/pages/templates/01.astro", undefined);

const $$file = "/home/loweffort/Escritorio/fanaweb/src/pages/templates/01.astro";
const $$url = "/templates/01";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$01,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
