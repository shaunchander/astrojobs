import type { APIRoute } from "astro"
import Stripe from "stripe"
import { seoConfig } from "@lib/seoConfig"

const stripe = new Stripe(import.meta.env.STRIPE_KEY, {
	apiVersion: "2022-11-15"
})

export const get: APIRoute = async () => {
	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: import.meta.env.STRIPE_PRODUCT,
					quantity: 1
				}
			],
			mode: "payment",
			success_url: `${seoConfig.baseURL}/offer-posted`,
			cancel_url: `${seoConfig.baseURL}/post-an-offer`
		})

		return {
			status: 200,
			body: JSON.stringify({ url: session.url, id: session.id })
		}
	} catch (err) {
		console.error(err)
		return {
			status: 400,
			body: "Bad request."
		}
	}
}
