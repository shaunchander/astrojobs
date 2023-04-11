import type { ComponentType } from "svelte"
import type { JobOffer } from "@component/JobOffer"
import { UploadBody, createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const client = createClient({
	projectId: import.meta.env.SANITY_PROJECT_ID ?? "",
	dataset: import.meta.env.SANITY_DATASET ?? "",
	useCdn: import.meta.env.NODE_ENV === "production",
	apiVersion: "2023-04-05" ?? "",
	token: import.meta.env.SANITY_READ_TOKEN ?? ""
})

const builder = imageUrlBuilder(client)

export const getJobOffers = async () => {
	const job_offers: ComponentType<JobOffer>[] = await client.fetch(
		'*[_type == "job_offer" && is_active == true]'
	)
	return job_offers
}

export const getSiteConfig = async () => {
	const site_config: {
		free_slots: number
	}[] = await client.fetch('*[_type == "site_config"]')
	return site_config[0]
}

export const resolveImageUrl = (image: SanityImageSource) => {
	return builder.image(image).url()
}

export const postJobOffer = async (jobOffer: any) => {
	const { _id } = await client.create(jobOffer)
	return _id
}

export const postAsset = async (image: UploadBody) => {
	const { _id } = await client.assets.upload("image", image)
	return _id
}

export const decrementFreeSlots = async () => {
	const data = await getSiteConfig()
	if (data) {
		const { free_slots } = data
		if (free_slots > 0) {
			client
				.patch("site_config")
				.set({ free_slots: free_slots - 1 })
				.commit()
			console.log(
				"Decrementing a free slot, there's now",
				free_slots - 1,
				"slots left"
			)
		}
	}
}

export const activateJobOffer = async (stripeId: string) => {
	const jobOffer = await client.fetch(
		`*[_type == "job_offer" && stripe_id=="${stripeId}"]`
	)

	await client.patch(jobOffer._id).set({ is_active: true })
}
