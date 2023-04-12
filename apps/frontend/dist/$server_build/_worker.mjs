import { A as App, g as server_default, h as deserializeManifest } from './chunks/astro.9dda6fe9.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/prerender.52c62bc0.mjs';
import { _ as _page3, d as _page4, f as _page5, h as _page6, i as _page7, j as _page8 } from './chunks/pages/all.7262cdfc.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';
/* empty css                                 */import 'stripe';
import '@sanity/client';
import '@sanity/image-url';
import 'mailgun.js';
import 'form-data';

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

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/privacy-policy.astro", _page1],["src/pages/post-an-offer.astro", _page2],["src/pages/offer-posted.astro", _page3],["src/pages/server/generate-stripe-checkout.ts", _page4],["src/pages/server/handle-stripe-payment.ts", _page5],["src/pages/server/delete-job-offer.ts", _page6],["src/pages/server/post-an-offer.ts", _page7],["src/pages/server/send-email.ts", _page8],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/cloudflare","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy-policy/index.html","links":[],"scripts":[],"routeData":{"route":"/privacy-policy","type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"post-an-offer/index.html","links":[],"scripts":[],"routeData":{"route":"/post-an-offer","type":"page","pattern":"^\\/post-an-offer\\/?$","segments":[[{"content":"post-an-offer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post-an-offer.astro","pathname":"/post-an-offer","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/index.7d8c118b.css"],"scripts":[{"type":"inline","value":"function x(r){var e={target:\"confetti-holder\",max:80,size:1,animate:!0,respawn:!0,props:[\"circle\",\"square\",\"triangle\",\"line\"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(r&&(r.target&&(e.target=r.target),r.max&&(e.max=r.max),r.size&&(e.size=r.size),r.animate!==void 0&&r.animate!==null&&(e.animate=r.animate),r.respawn!==void 0&&r.respawn!==null&&(e.respawn=r.respawn),r.props&&(e.props=r.props),r.colors&&(e.colors=r.colors),r.clock&&(e.clock=r.clock),r.start_from_edge!==void 0&&r.start_from_edge!==null&&(e.start_from_edge=r.start_from_edge),r.width&&(e.width=r.width),r.height&&(e.height=r.height),r.rotate!==void 0&&r.rotate!==null&&(e.rotate=r.rotate)),typeof e.target!=\"object\"&&typeof e.target!=\"string\")throw new TypeError(\"The target parameter should be a node or string\");if(typeof e.target==\"object\"&&(e.target===null||!e.target instanceof HTMLCanvasElement)||typeof e.target==\"string\"&&(document.getElementById(e.target)===null||!document.getElementById(e.target)instanceof HTMLCanvasElement))throw new ReferenceError(\"The target element does not exist or is not a canvas element\");var f=typeof e.target==\"object\"?e.target:document.getElementById(e.target),n=f.getContext(\"2d\"),c=[];function a(t,o){t||(t=1);var s=Math.random()*t;return o?Math.floor(s):s}var g=e.props.reduce(function(t,o){return t+(o.weight||1)},0);function h(){for(var t=Math.random()*g,o=0;o<e.props.length;++o){var s=e.props[o].weight||1;if(t<s)return o;t-=s}}function u(){var t=e.props[h()],o={prop:t.type?t.type:t,x:a(e.width),y:e.start_from_edge?e.clock>=0?-10:parseFloat(e.height)+10:a(e.height),src:t.src,radius:a(4)+1,size:t.size,rotate:e.rotate,line:Math.floor(a(65)-30),angles:[a(10,!0)+2,a(10,!0)+2,a(10,!0)+2,a(10,!0)+2],color:e.colors[a(e.colors.length,!0)],rotation:a(360,!0)*Math.PI/180,speed:a(e.clock/7)+e.clock/30};return o}function v(t){if(t){var o=t.radius<=3?.4:.8;switch(n.fillStyle=n.strokeStyle=\"rgba(\"+t.color+\", \"+o+\")\",n.beginPath(),t.prop){case\"circle\":{n.moveTo(t.x,t.y),n.arc(t.x,t.y,t.radius*e.size,0,Math.PI*2,!0),n.fill();break}case\"triangle\":{n.moveTo(t.x,t.y),n.lineTo(t.x+t.angles[0]*e.size,t.y+t.angles[1]*e.size),n.lineTo(t.x+t.angles[2]*e.size,t.y+t.angles[3]*e.size),n.closePath(),n.fill();break}case\"line\":{n.moveTo(t.x,t.y),n.lineTo(t.x+t.line*e.size,t.y+t.radius*5),n.lineWidth=2*e.size,n.stroke();break}case\"square\":{n.save(),n.translate(t.x+15,t.y+5),n.rotate(t.rotation),n.fillRect(-15*e.size,-5*e.size,15*e.size,5*e.size),n.restore();break}case\"svg\":{n.save();var s=new window.Image;s.src=t.src;var i=t.size||15;n.translate(t.x+i/2,t.y+i/2),t.rotate&&n.rotate(t.rotation),n.drawImage(s,-(i/2)*e.size,-(i/2)*e.size,i*e.size,i*e.size),n.restore();break}}}}var d=function(){e.animate=!1,clearInterval(e.interval),requestAnimationFrame(function(){n.clearRect(0,0,f.width,f.height);var t=f.width;f.width=1,f.width=t})},w=function(){f.width=e.width,f.height=e.height,c=[];for(var t=0;t<e.max;t++)c.push(u());function o(){n.clearRect(0,0,e.width,e.height);for(var i in c)v(c[i]);s(),e.animate&&requestAnimationFrame(o)}function s(){for(var i=0;i<e.max;i++){var l=c[i];l&&(e.animate&&(l.y+=l.speed),l.rotate&&(l.rotation+=l.speed/35),(l.speed>=0&&l.y>e.height||l.speed<0&&l.y<0)&&(e.respawn?(c[i]=l,c[i].x=a(e.width,!0),c[i].y=l.speed>=0?-10:parseFloat(e.height)):c[i]=void 0))}c.every(function(y){return y===void 0})&&d()}return requestAnimationFrame(o)};return{render:w,clear:d}}var z={target:\"my-canvas\"},k=new x(z);k.render();\n"}],"routeData":{"route":"/offer-posted","type":"page","pattern":"^\\/offer-posted\\/?$","segments":[[{"content":"offer-posted","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/offer-posted.astro","pathname":"/offer-posted","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/server/generate-stripe-checkout","type":"endpoint","pattern":"^\\/server\\/generate-stripe-checkout$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"generate-stripe-checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/generate-stripe-checkout.ts","pathname":"/server/generate-stripe-checkout","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/server/handle-stripe-payment","type":"endpoint","pattern":"^\\/server\\/handle-stripe-payment$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"handle-stripe-payment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/handle-stripe-payment.ts","pathname":"/server/handle-stripe-payment","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/server/delete-job-offer","type":"endpoint","pattern":"^\\/server\\/delete-job-offer$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"delete-job-offer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/delete-job-offer.ts","pathname":"/server/delete-job-offer","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/server/post-an-offer","type":"endpoint","pattern":"^\\/server\\/post-an-offer$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"post-an-offer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/post-an-offer.ts","pathname":"/server/post-an-offer","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/server/send-email","type":"endpoint","pattern":"^\\/server\\/send-email$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/send-email.ts","pathname":"/server/send-email","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astrojobs.net","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/offer-posted.astro",{"propagation":"none","containsHead":true}],["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/post-an-offer.astro",{"propagation":"none","containsHead":true}],["/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/privacy-policy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@component/JobOffer":"_astro/JobOffer.3facab18.js","/astro/hoisted.js?q=0":"_astro/hoisted.c22b6ff3.js","@astrojs/svelte/client.js":"_astro/client.c4e17359.js","@component/DeleteOffer":"_astro/DeleteOffer.96562917.js","@component/PostOfferForm":"_astro/PostOfferForm.feaaf482.js","@globals":"_astro/_astro-entry_@globals.38d170a5.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/bg.2ab9f47c.svg","/_astro/index.7d8c118b.css","/browserconfig.xml","/humans.txt","/robots.txt","/_astro/DeleteOffer.96562917.js","/_astro/JobOffer.3facab18.js","/_astro/JobOffer.c24d7eb6.js","/_astro/PostOfferForm.feaaf482.js","/_astro/_astro-entry_@globals.38d170a5.js","/_astro/browser.9aaf134f.js","/_astro/client.c4e17359.js","/_astro/index.c2f6a559.js","/favicons/favicon-114x114.png","/favicons/favicon-120x120.png","/favicons/favicon-128x128.png","/favicons/favicon-144x144.png","/favicons/favicon-150x150.png","/favicons/favicon-152x152.png","/favicons/favicon-16x16.png","/favicons/favicon-180x180.png","/favicons/favicon-192x192.png","/favicons/favicon-310x310.png","/favicons/favicon-32x32.png","/favicons/favicon-384x384.png","/favicons/favicon-512x512.png","/favicons/favicon-57x57.png","/favicons/favicon-60x60.png","/favicons/favicon-70x70.png","/favicons/favicon-72x72.png","/favicons/favicon-76x76.png","/favicons/favicon-96x96.png","/favicons/favicon.ico","/favicons/favicon.svg","/fonts/GeneralSans-Variable.eot","/fonts/GeneralSans-Variable.ttf","/fonts/GeneralSans-Variable.woff","/fonts/GeneralSans-Variable.woff2","/$server_build/chunks/astro.9dda6fe9.mjs","/$server_build/chunks/prerender.52c62bc0.mjs","/$server_build/_astro/bg.2ab9f47c.svg","/$server_build/_astro/index.7d8c118b.css","/$server_build/chunks/pages/all.7262cdfc.mjs","/index.html","/privacy-policy/index.html","/post-an-offer/index.html"]}), {
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
