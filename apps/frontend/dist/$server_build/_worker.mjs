import { A as App, g as server_default, h as deserializeManifest } from './chunks/astro.a2a200cf.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/prerender.c6b3db43.mjs';
import { _ as _page3 } from './chunks/pages/all.3fce1a04.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';
import '@sanity/client';
import '@sanity/image-url';
/* empty css                                 */
const isNode = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
function getProcessEnvProxy() {
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        console.warn(
          // NOTE: \0 prevents Vite replacement
          `Unable to access \`import.meta\0.env.${prop.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`
        );
      }
    }
  );
}

if (!isNode) {
  process.env = getProcessEnvProxy();
}
function createExports(manifest) {
  const app = new App(manifest);
  const onRequest = async ({
    request,
    next,
    ...runtimeEnv
  }) => {
    process.env = runtimeEnv.env;
    const { pathname } = new URL(request.url);
    if (manifest.assets.has(pathname)) {
      return next(request);
    }
    let routeData = app.match(request, { matchNotFound: true });
    if (routeData) {
      Reflect.set(
        request,
        Symbol.for("astro.clientAddress"),
        request.headers.get("cf-connecting-ip")
      );
      Reflect.set(request, Symbol.for("runtime"), {
        ...runtimeEnv,
        name: "cloudflare",
        next
      });
      let response = await app.render(request, routeData);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    }
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  };
  return { onRequest };
}

const adapter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: 'Module' }));

function check(Component) {
	return Component['render'] && Component['$$render'];
}

async function renderToStaticMarkup(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			`<astro-slot${key === 'default' ? '' : ` name="${key}"`}>${value}</astro-slot>`;
	}
	const { html } = Component.render(props, { $$slots: slots });
	return { html };
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/privacy-policy.astro", _page1],["src/pages/post-an-offer.astro", _page2],["src/pages/hello.ts", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/cloudflare","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy-policy/index.html","links":[],"scripts":[],"routeData":{"route":"/privacy-policy","type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"post-an-offer/index.html","links":[],"scripts":[],"routeData":{"route":"/post-an-offer","type":"page","pattern":"^\\/post-an-offer\\/?$","segments":[[{"content":"post-an-offer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post-an-offer.astro","pathname":"/post-an-offer","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/hello","type":"endpoint","pattern":"^\\/hello$","segments":[[{"content":"hello","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hello.ts","pathname":"/hello","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astrojobs.net","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/post-an-offer.astro",{"propagation":"none","containsHead":true}],["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/privacy-policy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@component/PostOfferForm":"_astro/PostOfferForm.502a82e1.js","@astrojs/svelte/client.js":"_astro/client.c4e17359.js","@component/JobOffer":"_astro/JobOffer.43219b20.js","@globals":"_astro/_astro-entry_@globals.2c401101.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/bg.2ab9f47c.svg","/_astro/index.c1d5bbf8.css","/browserconfig.xml","/humans.txt","/robots.txt","/_astro/JobOffer.43219b20.js","/_astro/JobOffer.7e6a4263.js","/_astro/PostOfferForm.502a82e1.js","/_astro/_astro-entry_@globals.2c401101.js","/_astro/browser.908dc2af.js","/_astro/client.c4e17359.js","/_astro/index.c6f0ccee.js","/favicons/favicon-114x114.png","/favicons/favicon-120x120.png","/favicons/favicon-128x128.png","/favicons/favicon-144x144.png","/favicons/favicon-150x150.png","/favicons/favicon-152x152.png","/favicons/favicon-16x16.png","/favicons/favicon-180x180.png","/favicons/favicon-192x192.png","/favicons/favicon-310x310.png","/favicons/favicon-32x32.png","/favicons/favicon-384x384.png","/favicons/favicon-512x512.png","/favicons/favicon-57x57.png","/favicons/favicon-60x60.png","/favicons/favicon-70x70.png","/favicons/favicon-72x72.png","/favicons/favicon-76x76.png","/favicons/favicon-96x96.png","/favicons/favicon.ico","/favicons/favicon.svg","/fonts/GeneralSans-Variable.eot","/fonts/GeneralSans-Variable.ttf","/fonts/GeneralSans-Variable.woff","/fonts/GeneralSans-Variable.woff2","/$server_build/_astro/bg.2ab9f47c.svg","/$server_build/_astro/index.c1d5bbf8.css","/$server_build/chunks/astro.a2a200cf.mjs","/$server_build/chunks/prerender.c6b3db43.mjs","/$server_build/chunks/pages/all.3fce1a04.mjs","/index.html","/privacy-policy/index.html","/post-an-offer/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = undefined;
const _exports = createExports(_manifest);
const onRequest = _exports['onRequest'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { onRequest, pageMap, renderers };
