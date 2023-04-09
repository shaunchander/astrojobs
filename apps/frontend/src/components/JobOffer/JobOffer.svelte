<script lang="ts">
	import { resolveImageUrl } from "@lib/sanity"

	export let company_name: string
	export let company_logo: string
	export let location: string
	export let is_remote: boolean
	export let role_title: string
	export let is_full_time: boolean
	export let is_contract: boolean
	export let salary_left_bound: number
	export let salary_right_bound: number
	export let meta_framework: string
	export let listing_url: string

	const formatSalary = (salary: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0
		}).format(salary)
	}
</script>

<a
	href={listing_url}
	class="rounded-lg border border-zinc-200 bg-zinc-50 dark:bg-slate-950 dark:border-zinc-200/30 p-6 flex flex-col gap-y-5"
>
	<div>
		<img
			class="h-16 w-16 rounded-full contain object-center"
			src={resolveImageUrl(company_logo)}
			width={64}
			height={64}
			loading="lazy"
			alt={company_name}
		/>
	</div>
	<div class="space-y-2">
		<p class="small font-semibold">{company_name}</p>
		<h2>{role_title}</h2>
		<div>
			<p class="small text-zinc-400">
				{#if is_contract}
					Contract
				{/if}
				{#if is_contract && is_full_time}
					or
				{/if}
				{#if is_full_time}
					Full Time
				{/if}
				<span>&bull;</span>
				{formatSalary(salary_left_bound)} - {formatSalary(salary_right_bound)}
			</p>
		</div>
	</div>
	<div>
		<p>
			{#if is_remote} <span>Remote</span> {/if}
			{#if is_remote && location} <span>/ </span> {/if}
			{#if location} <span>{location}</span> {/if}
		</p>
	</div>
</a>
