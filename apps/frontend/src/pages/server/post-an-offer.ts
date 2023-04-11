import { decrementFreeSlots, postAsset, postJobOffer } from "@lib/sanity"
import type { APIRoute } from "astro"

export const post: APIRoute = async (ctx) => {
	try {
		const formData = await ctx.request.formData()
		const companyLogoAsBuffer = await (
			formData.get("company_logo") as File
		).arrayBuffer()

		// Upload the image.
		console.log("Uploading image...")
		const imageId = await postAsset(Buffer.from(companyLogoAsBuffer))
		console.log("Image uploaded.")

		const jobOffer = {
			_type: "job_offer",
			company_name: formData.get("company_name"),
			company_logo: {
				_type: "image",
				_ref: imageId
			},
			location: formData.get("location"),
			is_remote: formData.get("is_remote") === "on" ? true : false,
			role_title: formData.get("role_title"),
			is_full_time: formData.get("is_full_time") === "on" ? true : false,
			is_contract: formData.get("is_contract") === "on" ? true : false,
			salary_left_bound: Number(formData.get("salary_left_bound")),
			salary_right_bound: Number(formData.get("salary_right_bound")),
			meta_framework: formData.get("meta_framework"),
			email: formData.get("email"),
			stripe_id: formData.get("stripe_id")
		}
		console.log("Posting job offer...")
		const _id = await postJobOffer(jobOffer)
		console.log("Job offer posted!")

		// Check if we need to reduce the number of free slots.
		await decrementFreeSlots()

		return {
			status: 200,
			body: JSON.stringify({ _id })
		}
	} catch (err) {
		console.log(err)
		return {
			status: 400,
			body: "An error occurred."
		}
	}
}
