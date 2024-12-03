import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_LQ1qgZCX.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_XPotyUtQ.mjs';
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
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/AXH/Documents/my-site/zab-media/mustmedia/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DPfZXjeO.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DKe5Dju8.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/search\\.json\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/search.json.ts","pathname":"/articles/api/search.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DPfZXjeO.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DPfZXjeO.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DPfZXjeO.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"}],"routeData":{"route":"/case-studies/[id]","isIndex":false,"type":"page","pattern":"^\\/case-studies\\/([^/]+?)\\/?$","segments":[[{"content":"case-studies","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/case-studies/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CfqNR2B3.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"},{"type":"inline","content":".filter-btn[data-astro-cid-44gysecv].active,.filter-btn[data-astro-cid-44gysecv][data-active=true]{--tw-border-opacity: 1;border-color:rgb(99 173 242 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(99 173 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.case-study-item[data-astro-cid-44gysecv][data-visible=false]{display:none}\n"}],"routeData":{"route":"/case-studies","isIndex":false,"type":"page","pattern":"^\\/case-studies\\/?$","segments":[[{"content":"case-studies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/case-studies.astro","pathname":"/case-studies","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DiKNWjRk.js"}],"styles":[{"type":"external","src":"/_astro/about.CoOy_O5T.css"},{"type":"inline","content":".tab-btn[data-astro-cid-lmkygsfs].active{background-color:#80ced7;color:#fff!important;border-color:#80ced7}.pricing-content[data-astro-cid-lmkygsfs]{display:none}.pricing-content[data-astro-cid-lmkygsfs].active{display:block}\n"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DSrsnxej.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BwXjGcf2.css"},{"type":"external","src":"/_astro/about.CoOy_O5T.css"},{"type":"inline","content":".bubble[data-astro-cid-g42mys5r]{position:relative;padding:8%;background-color:#000;color:#fff;border-radius:45px;border:1px solid #B9FF66}.bubble[data-astro-cid-g42mys5r]:after{content:\"\";position:absolute;bottom:-20px;left:50px;border-width:22px;border-style:solid;border-color:black transparent transparent black}.bubble[data-astro-cid-g42mys5r]:before{content:\"\";position:absolute;bottom:-40px;left:48px;border-width:20px;border-style:solid;border-color:#B9FF66 transparent transparent #B9FF66}.swiper-wrapper[data-astro-cid-g42mys5r]{position:relative}.swiper-slide[data-astro-cid-g42mys5r]{display:flex;align-items:center;justify-content:center;transition:all .5s ease-in-out}.swiper-pagination[data-astro-cid-g42mys5r]{display:flex;align-items:center;width:auto!important;position:static!important}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/articles/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/case-studies.astro",{"propagation":"none","containsHead":true}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/case-studies/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/pricing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/api/search.json@_@ts":"pages/articles/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/case-studies/[id]@_@astro":"pages/case-studies/_id_.astro.mjs","\u0000@astro-page:src/pages/case-studies@_@astro":"pages/case-studies.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/How to quickly deploy a static website.md?astroContentCollectionEntry=true":"chunks/How to quickly deploy a static website_q-CRdewt.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/art-of-prompt-engineering.md?astroContentCollectionEntry=true":"chunks/art-of-prompt-engineering_BRpiTRSr.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/cannon-excellence.md?astroContentCollectionEntry=true":"chunks/cannon-excellence_6qdnJWIf.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/cutting-edge-tablets.md?astroContentCollectionEntry=true":"chunks/cutting-edge-tablets_aoiSQJjT.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/guardian-of-the-digital-realm.md?astroContentCollectionEntry=true":"chunks/guardian-of-the-digital-realm_mPyisVPg.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/pack-basic-marketing.md?astroContentCollectionEntry=true":"chunks/pack-basic-marketing_DpiZ6TDE.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/How to quickly deploy a static website.md?astroPropagatedAssets":"chunks/How to quickly deploy a static website_2j8xrj5k.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/art-of-prompt-engineering.md?astroPropagatedAssets":"chunks/art-of-prompt-engineering_BOrz2DWt.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/cannon-excellence.md?astroPropagatedAssets":"chunks/cannon-excellence_BL0OWIRg.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/cutting-edge-tablets.md?astroPropagatedAssets":"chunks/cutting-edge-tablets_CgIRNk7h.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/guardian-of-the-digital-realm.md?astroPropagatedAssets":"chunks/guardian-of-the-digital-realm_Cc-WFzl4.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/pack-basic-marketing.md?astroPropagatedAssets":"chunks/pack-basic-marketing_JDtRk5KM.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/How to quickly deploy a static website.md":"chunks/How to quickly deploy a static website_C0YrgwWr.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/art-of-prompt-engineering.md":"chunks/art-of-prompt-engineering_Da48QjZB.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/cannon-excellence.md":"chunks/cannon-excellence__5MRw1Qp.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/cutting-edge-tablets.md":"chunks/cutting-edge-tablets_DXdzoIeu.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/guardian-of-the-digital-realm.md":"chunks/guardian-of-the-digital-realm_BaqFTOVy.mjs","C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/pack-basic-marketing.md":"chunks/pack-basic-marketing_BkRceE2c.mjs","\u0000@astrojs-manifest":"manifest_SRnc-oM2.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CfqNR2B3.js","/astro/hoisted.js?q=1":"_astro/hoisted.DiKNWjRk.js","/astro/hoisted.js?q=4":"_astro/hoisted.DSrsnxej.js","/astro/hoisted.js?q=2":"_astro/hoisted.DPfZXjeO.js","/astro/hoisted.js?q=3":"_astro/hoisted.DKe5Dju8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.CoOy_O5T.css","/404.svg","/cover.png","/favicon.svg","/Hero.svg","/Logo.svg","/blog/image1.png","/blog/image2.png","/blog/image3.png","/blog/image4.png","/blog/image5.png","/clients/01.svg","/clients/02.svg","/clients/03.svg","/clients/04.svg","/clients/05.svg","/clients/06.svg","/clients/bubble.svg","/clients/contact.svg","/services/01.svg","/services/02.svg","/services/03.svg","/services/04.svg","/services/05.svg","/services/06.svg","/services/ag.svg","/services/agc.svg","/services/aw.svg","/services/Illustration.svg","/team/c1.png","/team/c2 (Custom).png","/team/c2.png","/team/c3.png","/team/contact.svg","/team/ln.svg","/team/lng.svg","/team/minus.svg","/team/plus.svg","/team/prof.png","/team/vector.svg","/_astro/hoisted.BwXjGcf2.css","/_astro/hoisted.CfqNR2B3.js","/_astro/hoisted.DiKNWjRk.js","/_astro/hoisted.DKe5Dju8.js","/_astro/hoisted.DPfZXjeO.js","/_astro/hoisted.DSrsnxej.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"OLHpPFSYsPjb439mb7SV46Fn/7xmS8dX7ekjIbBKWBA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
