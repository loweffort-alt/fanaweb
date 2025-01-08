import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CqvQ7sei.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BEPFBVGG.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/loweffort/Escritorio/fanaweb/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/actions/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/actions\\/send-email\\/?$","segments":[[{"content":"actions","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/actions/send-email.ts","pathname":"/actions/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/templates/01","isIndex":false,"type":"page","pattern":"^\\/templates\\/01\\/?$","segments":[[{"content":"templates","dynamic":false,"spread":false}],[{"content":"01","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/templates/01.astro","pathname":"/templates/01","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AdvantagesMenu.DV8PrLMj.css"},{"type":"external","src":"/_astro/index.BWmVTtqL.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/loweffort/Escritorio/fanaweb/src/pages/templates/01.astro",{"propagation":"none","containsHead":true}],["/home/loweffort/Escritorio/fanaweb/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/templates/01@_@astro":"pages/templates/01.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/actions/send-email@_@ts":"pages/actions/send-email.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/loweffort/Escritorio/fanaweb/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/loweffort/Escritorio/fanaweb/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CrBlo8up.mjs","\u0000@astrojs-manifest":"manifest_BPDXjn38.mjs","/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Form/FormInput":"_astro/FormInput.FHkoGxcT.js","@astrojs/react/client.js":"_astro/client.CiiykCno.js","/home/loweffort/Escritorio/fanaweb/src/pages/templates/01.astro?astro&type=script&index=0&lang.ts":"_astro/01.astro_astro_type_script_index_0_lang.BFTTC_xS.js","/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Advantages/AdvantagesMenu.astro?astro&type=script&index=0&lang.ts":"_astro/AdvantagesMenu.astro_astro_type_script_index_0_lang.j2_iRTRW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/loweffort/Escritorio/fanaweb/src/pages/templates/01.astro?astro&type=script&index=0&lang.ts","const a=(t=\"Alex\",o,i)=>`\n    <div style=\"max-width: 600px; border: 1px solid #efefef; padding: 16px\">\n      <div style=\"margin-bottom: 32px; color: #222\">\n        <p style=\"margin-bottom: 16px\">Hi, ${t},</p>\n        <p style=\"margin-bottom: 16px\">Welcome to my ${o}!</p>\n        <p>\n          Proident ullamco cillum eu magna dolor Lorem sit elit ad dolore eiusmod aliquip dolor enim. Cupidatat labore velit\n          aliquip ullamco aute esse cupidatat nisi quis ullamco. Pariatur aute do quis ex exercitation ullamco enim tempor.\n          Culpa veniam do ex velit magna consequat Lorem duis enim anim do.\n        </p>\n      </div>\n      <div style=\"color: #5f5f5f\">\n        <p>Footer content goes ${i} ...</p>\n      </div>\n    </div>\n  `,e=document.createElement(\"div\");e.innerHTML=a();const l=document.getElementById(\"container\");l?.appendChild(e);"]],"assets":["/_astro/index.BWmVTtqL.css","/Logo.png","/Logo.svg","/Logo.webp","/circle-fana-icon.png","/favicon.svg","/hero-optimized.webp","/logoOriginal.png","/logoOriginal.webp","/techplatform.png","/_astro/AdvantagesMenu.DV8PrLMj.css","/_astro/AdvantagesMenu.astro_astro_type_script_index_0_lang.j2_iRTRW.js","/_astro/FormInput.FHkoGxcT.js","/_astro/client.CiiykCno.js","/_astro/index.5vR-3Izp.js","/Photos/Campeon2004.jpg","/Photos/delivery.png","/Photos/edited01.jpg","/Photos/experience.jpg","/Photos/experience.webp","/Photos/innovative.png","/Photos/personalized.jpg","/Photos/specialized.png","/favicons/android-chrome-192x192.png","/favicons/android-chrome-512x512.png","/favicons/apple-touch-icon.png","/favicons/favicon-16x16.png","/favicons/favicon-32x32.png","/favicons/favicon.ico","/favicons/site.webmanifest","/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf","/fonts/Inter/Inter-VariableFont_opsz,wght.ttf","/fonts/Inter/OFL.txt","/fonts/Inter/README.txt","/fonts/Titillium_Web/OFL.txt","/fonts/Titillium_Web/TitilliumWeb-Black.ttf","/fonts/Titillium_Web/TitilliumWeb-Bold.ttf","/fonts/Titillium_Web/TitilliumWeb-BoldItalic.ttf","/fonts/Titillium_Web/TitilliumWeb-ExtraLight.ttf","/fonts/Titillium_Web/TitilliumWeb-ExtraLightItalic.ttf","/fonts/Titillium_Web/TitilliumWeb-Italic.ttf","/fonts/Titillium_Web/TitilliumWeb-Light.ttf","/fonts/Titillium_Web/TitilliumWeb-LightItalic.ttf","/fonts/Titillium_Web/TitilliumWeb-Regular.ttf","/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf","/fonts/Titillium_Web/TitilliumWeb-SemiBoldItalic.ttf","/fonts/Inter/static/Inter_18pt-Black.ttf","/fonts/Inter/static/Inter_18pt-BlackItalic.ttf","/fonts/Inter/static/Inter_18pt-Bold.ttf","/fonts/Inter/static/Inter_18pt-BoldItalic.ttf","/fonts/Inter/static/Inter_18pt-ExtraBold.ttf","/fonts/Inter/static/Inter_18pt-ExtraBoldItalic.ttf","/fonts/Inter/static/Inter_18pt-ExtraLight.ttf","/fonts/Inter/static/Inter_18pt-ExtraLightItalic.ttf","/fonts/Inter/static/Inter_18pt-Italic.ttf","/fonts/Inter/static/Inter_18pt-Light.ttf","/fonts/Inter/static/Inter_18pt-LightItalic.ttf","/fonts/Inter/static/Inter_18pt-Medium.ttf","/fonts/Inter/static/Inter_18pt-MediumItalic.ttf","/fonts/Inter/static/Inter_18pt-Regular.ttf","/fonts/Inter/static/Inter_18pt-SemiBold.ttf","/fonts/Inter/static/Inter_18pt-SemiBoldItalic.ttf","/fonts/Inter/static/Inter_18pt-Thin.ttf","/fonts/Inter/static/Inter_18pt-ThinItalic.ttf","/fonts/Inter/static/Inter_24pt-Black.ttf","/fonts/Inter/static/Inter_24pt-BlackItalic.ttf","/fonts/Inter/static/Inter_24pt-Bold.ttf","/fonts/Inter/static/Inter_24pt-BoldItalic.ttf","/fonts/Inter/static/Inter_24pt-ExtraBold.ttf","/fonts/Inter/static/Inter_24pt-ExtraBoldItalic.ttf","/fonts/Inter/static/Inter_24pt-ExtraLight.ttf","/fonts/Inter/static/Inter_24pt-ExtraLightItalic.ttf","/fonts/Inter/static/Inter_24pt-Italic.ttf","/fonts/Inter/static/Inter_24pt-Light.ttf","/fonts/Inter/static/Inter_24pt-LightItalic.ttf","/fonts/Inter/static/Inter_24pt-Medium.ttf","/fonts/Inter/static/Inter_24pt-MediumItalic.ttf","/fonts/Inter/static/Inter_24pt-Regular.ttf","/fonts/Inter/static/Inter_24pt-SemiBold.ttf","/fonts/Inter/static/Inter_24pt-SemiBoldItalic.ttf","/fonts/Inter/static/Inter_24pt-Thin.ttf","/fonts/Inter/static/Inter_24pt-ThinItalic.ttf","/fonts/Inter/static/Inter_28pt-Black.ttf","/fonts/Inter/static/Inter_28pt-BlackItalic.ttf","/fonts/Inter/static/Inter_28pt-Bold.ttf","/fonts/Inter/static/Inter_28pt-BoldItalic.ttf","/fonts/Inter/static/Inter_28pt-ExtraBold.ttf","/fonts/Inter/static/Inter_28pt-ExtraBoldItalic.ttf","/fonts/Inter/static/Inter_28pt-ExtraLight.ttf","/fonts/Inter/static/Inter_28pt-ExtraLightItalic.ttf","/fonts/Inter/static/Inter_28pt-Italic.ttf","/fonts/Inter/static/Inter_28pt-Light.ttf","/fonts/Inter/static/Inter_28pt-LightItalic.ttf","/fonts/Inter/static/Inter_28pt-Medium.ttf","/fonts/Inter/static/Inter_28pt-MediumItalic.ttf","/fonts/Inter/static/Inter_28pt-Regular.ttf","/fonts/Inter/static/Inter_28pt-SemiBold.ttf","/fonts/Inter/static/Inter_28pt-SemiBoldItalic.ttf","/fonts/Inter/static/Inter_28pt-Thin.ttf","/fonts/Inter/static/Inter_28pt-ThinItalic.ttf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"p8317JfQ3qtWhfm2sqyF0FvY8JqKSwB465OPIKmLAtc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
