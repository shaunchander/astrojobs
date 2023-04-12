import Mailgun from "mailgun.js"
import FormData from "form-data"
import type { APIRoute } from "astro"

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({ username: "api", key: import.meta.env.MAILGUN_KEY })
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
		console.log("Sending email...")
		mg.messages.create("mg.astrojobs.net", {
			to: "shaunchander@gmail.com",
			from: "Astro Jobs <support@astrojobs.net>",
			subject: "Astro Jobs - Your job offer has been posted!",
			template: "post-success",
			"v:_id": body._id
		})
		console.log("Email sent.")
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
