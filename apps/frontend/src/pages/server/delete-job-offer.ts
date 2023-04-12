import { deleteJobOffer } from "@lib/sanity"
import type { APIRoute } from "astro"

export const post: APIRoute = async (ctx) => {
	let body
	try {
		body = await ctx.request.json()
	} catch (err) {
		console.error(err)
		return {
			status: 400,
			body: "Bad request."
		}
	}
	if (!body._id) {
		return {
			status: 400,
			body: "Bad request."
		}
	}

	try {
		console.log("Deleting job offer...", body._id)
		await deleteJobOffer(body._id)
		console.log("Job offer deleted...")

		return {
			status: 200,
			body: "OK."
		}
	} catch (err) {
		console.error(err)
		return {
			status: 400,
			body: "Bad request."
		}
	}
}
