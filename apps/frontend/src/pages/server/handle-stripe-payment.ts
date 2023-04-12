import type { APIRoute } from "astro"
import Stripe from "stripe"
import { activateJobOffer } from "@lib/sanity"

const stripe = new Stripe(import.meta.env.STRIPE_KEY, {
	apiVersion: "2022-11-15"
})

export const post: APIRoute = async (ctx) => {
	const sig = ctx.request.headers.get("Stripe-Signature")
	const body = await ctx.request.text()

	let event
	try {
		event = stripe.webhooks.constructEventAsync(
			body,
			sig as string,
			import.meta.env.STRIPE_WEBHOOK_SECRET
		)
	} catch (err) {
		console.log(err)
		return {
			status: 400,
			body: "Bad request"
		}
	}
	switch ((await event).type) {
		case "checkout.session.completed":
			console.log("Activating job offer...")
			// @ts-ignore
			await activateJobOffer((await event).data.object.id)
			console.log("Job offer activated...")
			return {
				status: 200,
				body: "OK."
			}
	}

	return {
		status: 400,
		body: "Bad request."
	}
}
