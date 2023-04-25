/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://astrojobs.net", // Change this to your production URL.

	description:
		"Find jobs or post offers centered around Astro, the framework that makes the web faster.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://astrojobs.net/thumbnail.png", // Change this to your website's thumbnail.
		alt: "AstroJobs", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "AstroJobs", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}
