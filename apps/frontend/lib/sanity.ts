import type { ComponentType } from "svelte"
import type { JobOffer } from "@component/JobOffer"
import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID ?? "",
	dataset: process.env.SANITY_DATASET ?? "",
	useCdn: process.env.NODE_ENV === "production",
	apiVersion: "2023-04-05" ?? "",
	token: process.env.SANITY_READ_TOKEN ?? ""
})

const builder = imageUrlBuilder(client)

export const getJobOffers = async () => {
	const job_offers: ComponentType<JobOffer>[] = await client.fetch(
		'*[_type == "job_offer"]'
	)
	return job_offers
}

export const resolveImageUrl = (image: SanityImageSource) => {
	return builder.image(image).url()
}
