import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, e as renderHead, f as renderSlot } from './astro.a2a200cf.mjs';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
/* empty css                          */
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}

const client = createClient({
  projectId: ({}).SANITY_PROJECT_ID ?? "",
  dataset: ({}).SANITY_DATASET ?? "",
  useCdn: "production" === "production",
  apiVersion: "2023-04-05",
  token: ({}).SANITY_READ_TOKEN ?? ""
});
const builder = imageUrlBuilder(client);
const getJobOffers = async () => {
  const job_offers = await client.fetch(
    '*[_type == "job_offer"]'
  );
  return job_offers;
};
const resolveImageUrl = (image) => {
  return builder.image(image).url();
};

/* src/components/JobOffer/JobOffer.svelte generated by Svelte v3.58.0 */

const JobOffer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { company_name } = $$props;
	let { company_logo } = $$props;
	let { location } = $$props;
	let { is_remote } = $$props;
	let { role_title } = $$props;
	let { is_full_time } = $$props;
	let { is_contract } = $$props;
	let { salary_left_bound } = $$props;
	let { salary_right_bound } = $$props;
	let { meta_framework } = $$props;
	let { listing_url } = $$props;

	const formatSalary = salary => {
		return new Intl.NumberFormat("en-US",
		{
				style: "currency",
				currency: "USD",
				maximumFractionDigits: 0
			}).format(salary);
	};

	if ($$props.company_name === void 0 && $$bindings.company_name && company_name !== void 0) $$bindings.company_name(company_name);
	if ($$props.company_logo === void 0 && $$bindings.company_logo && company_logo !== void 0) $$bindings.company_logo(company_logo);
	if ($$props.location === void 0 && $$bindings.location && location !== void 0) $$bindings.location(location);
	if ($$props.is_remote === void 0 && $$bindings.is_remote && is_remote !== void 0) $$bindings.is_remote(is_remote);
	if ($$props.role_title === void 0 && $$bindings.role_title && role_title !== void 0) $$bindings.role_title(role_title);
	if ($$props.is_full_time === void 0 && $$bindings.is_full_time && is_full_time !== void 0) $$bindings.is_full_time(is_full_time);
	if ($$props.is_contract === void 0 && $$bindings.is_contract && is_contract !== void 0) $$bindings.is_contract(is_contract);
	if ($$props.salary_left_bound === void 0 && $$bindings.salary_left_bound && salary_left_bound !== void 0) $$bindings.salary_left_bound(salary_left_bound);
	if ($$props.salary_right_bound === void 0 && $$bindings.salary_right_bound && salary_right_bound !== void 0) $$bindings.salary_right_bound(salary_right_bound);
	if ($$props.meta_framework === void 0 && $$bindings.meta_framework && meta_framework !== void 0) $$bindings.meta_framework(meta_framework);
	if ($$props.listing_url === void 0 && $$bindings.listing_url && listing_url !== void 0) $$bindings.listing_url(listing_url);

	return `<a${add_attribute("href", listing_url, 0)} class="rounded-lg border border-zinc-200 bg-zinc-50 dark:bg-slate-950/30 backdrop-blur-lg dark:border-zinc-200/10 p-6 flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-5 lg:gap-y-0 dark:hover:bg-slate-900/30 transition duration-300 ease-in-out"><div class="h-16 w-16 rounded-full contain object-center bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-1"><img class="rounded-full"${add_attribute("src", resolveImageUrl(company_logo), 0)}${add_attribute("width", 64, 0)}${add_attribute("height", 64, 0)} loading="lazy"${add_attribute("alt", company_name, 0)}></div>
	<div class="space-y-2"><p class="small font-semibold">${escape(company_name)}</p>
		<h2>${escape(role_title)}</h2>
		<div><p class="small text-zinc-400">${is_contract ? `Contract` : ``}
				${is_contract && is_full_time ? `or` : ``}
				${is_full_time ? `Full Time` : ``}
				<span>•</span>
				${escape(formatSalary(salary_left_bound))} - ${escape(formatSalary(salary_right_bound))}</p></div></div>
	<div class="lg:flex-1 lg:flex lg:justify-end"><p class="font-medium">${is_remote ? `<span>Remote</span>` : ``}
			${is_remote && location ? `<span>/ </span>` : ``}
			${location ? `<span>${escape(location)}</span>` : ``}</p></div></a>`;
});

/* src/components/Hero/Hero.svelte generated by Svelte v3.58.0 */

const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="space-y-6 flex flex-col items-center"><div class="text-center space-y-4"><h1>🚀 Astro<span class="text-orange-600">Jobs</span></h1>
		<p class="h2 max-w-[525px]">Find companies hiring Astro roles or post an offer if you’re looking for
			an Astro developer!
		</p></div>
	<button class="btn btn-primary">✉️ Get new job notifications</button></div>`;
});

/* src/components/utils/Section/Section.svelte generated by Svelte v3.58.0 */

const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { id } = $$props;
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	return `<section class="px-4 lg:px-16 py-12 lg:py-16"${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});

/* src/components/utils/Container/Container.svelte generated by Svelte v3.58.0 */

const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="container mx-auto">${slots.default ? slots.default({}) : ``}</div>`;
});

/* src/components/global/Header/Header.svelte generated by Svelte v3.58.0 */

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<header class="sticky top-0 z-50 inset-x-0 p-6 bg-zinc-100 dark:bg-slate-950/30 backdrop-blur-md">${validate_component(Container, "Container").$$render($$result, {}, {}, {
		default: () => {
			return `<nav class="flex items-center justify-between"><div><a href="/" class="text-2xl font-black">🚀 Astro<span class="text-orange-600">Jobs</span></a></div>
			<div class="flex items-center gap-x-5"><div><ul class="flex items-center gap-x-5"><li><a href="/post-an-offer" class="btn btn-primary">Post an offer</a></li></ul></div></div></nav>`;
		}
	})}</header>`;
});

const $$Astro$b = createAstro("https://astrojobs.net");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="p-6 dark:bg-slate-950 space-y-4 lg:flex lg:items-center lg:space-y-0">
	<div class="lg:flex-1">
		<p class="text-xl font-black text-center">
			🚀 Astro<span class="text-orange-600">Jobs</span>
		</p>
	</div>
	<div class="lg:flex-1">
		<ul class="items-center flex gap-x-4 justify-center">
			<li>
				<a class="small hover:text-orange-600 transition duration-300" href="mailto:support@astrojobs.net">Contact us</a>
			</li>
			<li>
				<a class="small hover:text-orange-600 transition duration-300" href="/privacy-policy">Privacy Policy</a>
			</li>
			<li>
				<a class="small hover:text-orange-600 transition duration-300" href="/post-an-offer">Post an offer</a>
			</li>
		</ul>
	</div>
	<div class="lg:flex-1">
		<p class="text-white/60 small text-center">
			AstroJobs is not affiliated with <a href="https://astro.build">astrodotbuild</a>.
		</p>
	</div>
</footer>`;
}, "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/components/global/Footer/Footer.astro");

const $$Astro$a = createAstro("https://astrojobs.net");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$9 = createAstro("https://astrojobs.net");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$8 = createAstro("https://astrojobs.net");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$7 = createAstro("https://astrojobs.net");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$6 = createAstro("https://astrojobs.net");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$5 = createAstro("https://astrojobs.net");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$4 = createAstro("https://astrojobs.net");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}`;
}, "/Users/shaun/Desktop/lab/astrojobs/node_modules/astro-seo/src/SEO.astro");

const seoConfig = {
  baseURL: "https://astrojobs.net",
  // Change this to your production URL.
  description: "Find jobs or post offers centered around Astro, the framework that makes the web faster.",
  // Change this to be your website's description.
  type: "website",
  image: {
    url: "https://picsum.photos/1200/630",
    // Change this to your website's thumbnail.
    alt: "OpenGraph thumbnail description.",
    // Change this to your website's thumbnail description.
    width: 1200,
    height: 630
  },
  siteName: "AstroJobs",
  // Change this to your website's name,
  twitter: {
    card: "summary_large_image"
  }
};

const Background = "/_astro/bg.2ab9f47c.svg";

const $$Astro$3 = createAstro("https://astrojobs.net");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    ogTitle,
    description,
    image,
    disableIndexing = false
  } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<!-- SEO. -->
		${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": seoConfig.description , "noindex": disableIndexing, "nofollow": disableIndexing, "openGraph": {
    basic: {
      title: ogTitle || title,
      type: "website",
      image: seoConfig.image.url 
    },
    image: {
      width: seoConfig.image.width,
      height: seoConfig.image.height,
      alt: seoConfig.image.alt 
    },
    optional: {
      siteName: seoConfig.siteName,
      description: seoConfig.description 
    }
  }, "twitter": {
    card: seoConfig.twitter.card
  } })}

		<!-- Global meta tags. -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Favicons. -->
		<link rel="apple-touch-icon" sizes="57x57" href="/favicons/favicon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/favicons/favicon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/favicons/favicon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/favicons/favicon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/favicons/favicon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/favicons/favicon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/favicons/favicon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/favicons/favicon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180x180.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon-192x192.png">
		<link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico">
		<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico">
		<meta name="msapplication-TileColor" content="#ea580c">
		<meta name="msapplication-TileImage" content="/favicons/favicon-144x144.png">
		<meta name="msapplication-config" content="/browserconfig.xml">
		<link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg">
		<meta name="theme-color" content="#ea580c">
	${renderHead($$result)}</head>
	<body class="min-h-screen flex flex-col w-full overflow-x-hidden font-body text-slate-950 bg-zinc-100 relative dark:bg-slate-950 dark:text-zinc-100">
		${renderComponent($$result, "Header", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@globals", "client:component-export": "Header" })}
		<main class="flex flex-1 flex-col h-[100%] w-full relative z-10">
			${renderSlot($$result, $$slots["default"])}
		</main>

		<div class="absolute inset-0 pointer-events-none">
			<img${addAttribute(Background, "src")} alt="" class="w-full h-full dark:opacity-75">
		</div>
		${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
}, "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/components/global/Layout/Layout.astro");

const $$Astro$2 = createAstro("https://astrojobs.net");
const prerender$2 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const job_offers = await getJobOffers();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro PWA Starter" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Section", Section, { "id": "hero" }, { "default": ($$result3) => renderTemplate`
		${renderComponent($$result3, "Container", Container, {}, { "default": ($$result4) => renderTemplate`
			${renderComponent($$result4, "Hero", Hero, {})}
		` })}
	` })}
	${renderComponent($$result2, "Section", Section, { "id": "offers" }, { "default": ($$result3) => renderTemplate`
		${renderComponent($$result3, "Container", Container, {}, { "default": ($$result4) => renderTemplate`
			${maybeRenderHead($$result4)}<div class="grid gap-4 lg:max-w-4xl mx-auto">
				${job_offers.map((offer) => renderTemplate`${renderComponent($$result4, "JobOffer", JobOffer, { "client:visible": true, ...offer, "client:component-hydration": "visible", "client:component-path": "@component/JobOffer", "client:component-export": "JobOffer" })}`)}
			</div>
		` })}
	` })}
` })}`;
}, "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/index.astro");

const $$file$2 = "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$2,
    prerender: prerender$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://astrojobs.net");
const prerender$1 = true;
const $$PrivacyPolicy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PrivacyPolicy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Section", Section, { "id": "privacy-policy" }, { "default": ($$result3) => renderTemplate`
		${renderComponent($$result3, "Container", Container, {}, { "default": ($$result4) => renderTemplate`
			${maybeRenderHead($$result4)}<div class="space-y-6 max-w-2xl mx-auto">
				<div class="space-y-8">
					<h1 class="text-center">Privacy Policy</h1>
					<p>
						Thank you for visiting our website. This Privacy Policy explains how
						we collect, use, and protect the personal information you provide to
						us through your use of our website.
					</p>
				</div>
				<div class="space-y-4">
					<h2>What Information Do We Collect?</h2>
					<p>
						We use analytics tools, such as Google Analytics, to collect
						information about how visitors use our website. This includes
						information such as the pages you visit, the time you spend on our
						website, and the links you click on. This information does not
						include any personally identifiable information.
					</p>
				</div>
				<div class="space-y-4">
					<h2>How Do We Use Your Information?</h2>
					<p>
						We use the information we collect through our analytics tools to
						analyze how visitors use our website, to improve our website and
						services, and to generate reports about website traffic and
						activity. We do not use this information for any other purposes.
					</p>
				</div>
				<div class="space-y-4">
					<h2>Do We Share Your Information?</h2>
					<p>
						We do not share any personally identifiable information with third
						parties. We may share aggregated or de-identified data with third
						parties for research or marketing purposes.
					</p>
				</div>
				<div class="space-y-4">
					<h2>How Do We Protect Your Information?</h2>
					<p>
						We use industry-standard security measures to protect the
						information we collect through our website. We also limit access to
						this information to authorized personnel who have a legitimate
						business need for it.
					</p>
				</div>
				<div class="space-y-4">
					<h2>Do We Use Cookies?</h2>
					<p>
						Yes, we use cookies to collect information about how visitors use
						our website. Cookies are small data files that are placed on your
						device when you visit a website. We use cookies to analyze website
						traffic, customize website content, and improve your user
						experience.
					</p>
				</div>
				<div class="space-y-4">
					<h2>How Can You Opt-Out of Analytics Tracking?</h2>
					<p>
						You can opt-out of analytics tracking by disabling cookies in your
						web browser. You can also install a browser add-on to opt-out of
						Google Analytics tracking specifically.
					</p>
				</div>
				<div class="space-y-4">
					<h2>Changes to Our Privacy Policy</h2>
					<p>
						We reserve the right to modify this Privacy Policy at any time. Any
						changes to this Privacy Policy will be posted on our website.
					</p>
				</div>
				<div class="space-y-4">
					<h2>Contact Us</h2>
					<p>
						If you have any questions about our Privacy Policy or the
						information we collect through our website, please contact us at
						<a class="underline hover:text-orange-600 transition duration-300 ease-in-out" href="mailto:support@astrojobs.net">support@astrojobs.net</a>
					</p>
				</div>
			</div>
		` })}
	` })}
` })}`;
}, "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/privacy-policy.astro");

const $$file$1 = "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/privacy-policy.astro";
const $$url$1 = "/privacy-policy";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PrivacyPolicy,
    file: $$file$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

/* src/assets/svg/icons/image.svelte generated by Svelte v3.58.0 */

const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
});

/* src/components/PostOfferForm/PostOfferForm.svelte generated by Svelte v3.58.0 */

const PostOfferForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	return `<form action="" class="grid gap-4"><label for="company_name" class="block space-y-2"><span class="small">Company Name*</span>
		<input id="company_name" name="company_name" type="text" placeholder="Your company name..." required class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"></label>
	<label for="company_logo" class="block space-y-2"><span class="small">Company Logo*</span>

		<div class="bg-stone-950/40 appearance-none flex flex-col justify-center items-center w-full border border-white/10 rounded-lg h-48 text-stone-500 cursor-pointer space-y-4"><input id="company_logo" name="company_logo" type="file" accept="image/png, image/jpg, image/svg+xml" required placeholder="Your company name..." class="opacity-0 absolute inset-0 placeholder:text-stone-500">
			${validate_component(Image, "Image").$$render($$result, {}, {}, {})}
			<p class="small">Drop your logo...</p></div></label>
	<label for="role_title" class="block space-y-2"><span class="small">Role Title</span>
		<input id="role_title" name="role_title" type="text" placeholder="ex: Senior Frontend Engineer" class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"></label>
	<label for="meta_framework" class="block space-y-2"><div><span class="small">Meta framework</span>
			<span class="tiny block text-white/60">If you need a developer that knows a particular framework, set it here.</span></div>
		<select id="meta_framework" name="meta_framework" class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"><option selected value>-- </option><option value="react">React</option><option value="vue">Vue</option><option value="preact">Preact</option><option value="svelte">Svelte</option><option value="solidjs">SolidJS</option><option value="alpinejs">AlpineJS</option><option value="lit">Lit</option></select></label>
	<label for="salary_left_bound" class="block space-y-2"><span class="small">Salary (lower end)</span>
		<input id="salary_left_bound" name="salary_left_bound" type="number" placeholder="ex: 95000" min="0" class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"></label>
	<label for="salary_right_bound" class="block space-y-2"><span class="small">Salary (upper end)</span>
		<input id="salary_right_bound" name="salary_right_bound" type="number" placeholder="ex: 150000" min="0" class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"></label>

	<label for="location" class="block space-y-2"><div><span class="small block">Location</span>
			<span class="tiny block text-white/60">If this position is remote, you don&#39;t need to fill this field.</span></div>
		<input id="location" name="location" type="text" placeholder="ex: San Fransisco, CA" class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"></label>
	<label for="listing_url" class="block space-y-2"><div><span class="small block">Listing Url*</span>
			<span class="tiny block text-white/60">This is where applicants should submit their application.</span></div>

		<input id="listing_url" name="listing_url" type="text" placeholder="ex: https://..." required class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"></label>
	<label for="is_remote" class="flex items-center space-x-2"><span class="small">Is this position remote?</span>
		<input id="is_remote" name="is_remote" type="checkbox"></label>
	<label for="is_contract" class="flex items-center space-x-2"><span class="small">Is this position contracted?</span>
		<input id="is_contract" name="is_contract" type="checkbox"></label>
	<label for="is_full_time" class="flex items-center space-x-2"><span class="small">Is this position full-time?</span>
		<input id="is_full_time" name="is_full_time" type="checkbox"></label>
	<p>(*) indicates a required field.</p>
	<button type="submit" class="btn btn-primary mt-5">Submit</button></form>`;
});

const $$Astro = createAstro("https://astrojobs.net");
const prerender = true;
const $$PostAnOffer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostAnOffer;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Post an offer", "description": "Looking to onboard an Astro developer for your next project? Post an offer!" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Section", Section, { "id": "post-an-offer" }, { "default": ($$result3) => renderTemplate`
		${renderComponent($$result3, "Container", Container, {}, { "default": ($$result4) => renderTemplate`
			${maybeRenderHead($$result4)}<div class="max-w-2xl mx-auto space-y-12">
				<div class="space-y-4">
					<h1 class="text-center">
						Post an <span class="text-orange-600">offer</span>
					</h1>
					<p class="h2 text-center">
						We have <span class="text-orange-600">10</span> free spots left!
					</p>
				</div>
				<div>
					${renderComponent($$result4, "PostOfferForm", PostOfferForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@component/PostOfferForm", "client:component-export": "PostOfferForm" })}
				</div>
			</div>
		` })}
	` })}
` })}`;
}, "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/post-an-offer.astro");

const $$file = "/Users/shaun/Desktop/lab/astrojobs/apps/frontend/src/pages/post-an-offer.astro";
const $$url = "/post-an-offer";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PostAnOffer,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };