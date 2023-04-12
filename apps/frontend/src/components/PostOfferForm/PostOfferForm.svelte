<script lang="ts">
	import Image from "@svg/icons/image.svelte"

	let companyLogo = ""
	let status = ""
	export let freeSlots: number

	const handleFileUpload = (e: any) => {
		if (e.target.files.length === 0) return

		// @ts-ignore
		if ((e.target.files[0].size / 1024 / 1024).toFixed(2) > 2) {
			alert("File size is too big!")
			return
		}
		const reader = new FileReader()
		reader.readAsDataURL(e.target.files[0])

		reader.onload = (e) => {
			companyLogo = e.target?.result as string
		}
	}

	const handleSubmit = async (e: SubmitEvent) => {
		status = "loading"
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		formData.append("free_slots", freeSlots.toString())

		try {
			let stripeData
			if (freeSlots === 0) {
				stripeData = await fetch("/server/generate-stripe-checkout")
				stripeData = await stripeData.json()
				formData.append("stripe_id", stripeData.id)
			}

			const postOfferData = await fetch("/server/post-an-offer", {
				method: "POST",
				body: formData
			})
			if (!postOfferData.ok) {
				throw new Error(await postOfferData.json())
			}
			if (freeSlots === 0) {
				window.open(stripeData.url, "_blank")
			} else {
				window.location.replace("/offer-posted")
				const { _id } = await postOfferData.json()
				await fetch("/server/send-email", {
					method: "POST",
					body: JSON.stringify({ _id }),
					headers: {
						"Content-Type": "application/json"
					}
				})
			}
			status = "success"
		} catch (err) {
			console.log(err)
			status = "error"
		}
	}
</script>

<form
	method="POST"
	class="grid gap-4"
	on:submit={handleSubmit}
	autocomplete="off"
>
	<label for="email" class="block space-y-2 cursor-pointer">
		<span class="small">Your email*</span>
		<span class="tiny block text-white/60"
			>We'll send you a confirmation email and a manual delete URL to your
			inbox. inbox.</span
		>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="Your email..."
			required
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="company_name" class="block space-y-2 cursor-pointer">
		<span class="small">Company Name*</span>
		<input
			id="company_name"
			name="company_name"
			type="text"
			placeholder="Your company name..."
			required
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="company_logo" class="block space-y-2 cursor-pointer">
		<span class="small">Company Logo*</span>

		<div
			class="bg-slate-950/30 appearance-none flex flex-col justify-center items-center w-full border-2 border-dashed border-white/10 rounded-lg h-64 text-stone-500 relative p-6"
		>
			<input
				id="company_logo"
				name="company_logo"
				type="file"
				accept="image/png, image/jpg, image/svg+xml"
				required
				placeholder="Your company name..."
				class="opacity-0 absolute inset-0 placeholder:text-stone-500 pointer-events-none"
				on:change={handleFileUpload}
			/>
			{#if companyLogo}
				<img
					src={companyLogo}
					alt="Company logo"
					class="company-logo-img w-2/3 h-full object-contain"
				/>
			{:else}
				<div
					class="space-y-4 flex flex-col
				 justify-center items-center"
				>
					<Image />
					<p class="small">Drop your logo...</p>
				</div>
			{/if}
		</div>
	</label>
	<label for="role_title" class="block space-y-2 cursor-pointer">
		<span class="small">Role Title*</span>
		<input
			id="role_title"
			name="role_title"
			type="text"
			placeholder="ex: Senior Frontend Engineer"
			required
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="meta_framework" class="block space-y-2 cursor-pointer">
		<div>
			<span class="small">Meta framework</span>
			<span class="tiny block text-white/60"
				>If you need a developer that knows a particular framework, set it here.</span
			>
		</div>
		<div class="relative">
			<select
				id="meta_framework"
				name="meta_framework"
				class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
			>
				<option selected value> -- </option>
				<option value="react">React</option>
				<option value="vue">Vue</option>
				<option value="preact">Preact</option>
				<option value="svelte">Svelte</option>
				<option value="solidjs">SolidJS</option>
				<option value="alpinejs">AlpineJS</option>
				<option value="lit">Lit</option>
			</select>
		</div>
	</label>
	<label for="salary_left_bound" class="block space-y-2 cursor-pointer">
		<div>
			<span class="small">Salary (lower end)</span>
			<span class="tiny block text-white/60">Salaries should be in USD.</span>
		</div>
		<input
			id="salary_left_bound"
			name="salary_left_bound"
			type="number"
			placeholder="ex: 95000"
			min="0"
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="salary_right_bound" class="block space-y-2 cursor-pointer">
		<div>
			<span class="small">Salary (upper end)</span>
			<span class="tiny block text-white/60">Salaries should be in USD.</span>
		</div>
		<input
			id="salary_right_bound"
			name="salary_right_bound"
			type="number"
			placeholder="ex: 150000"
			min="0"
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>

	<label for="location" class="block space-y-2 cursor-pointer">
		<div>
			<span class="small block">Location</span>
			<span class="tiny block text-white/60"
				>If this position is remote, you don't need to fill this field.</span
			>
		</div>
		<input
			id="location"
			name="location"
			type="text"
			placeholder="ex: San Fransisco, CA"
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="listing_url" class="block space-y-2 cursor-pointer">
		<div>
			<span class="small block">Listing Url*</span>
			<span class="tiny block text-white/60"
				>This is where applicants should submit their application (must be a
				valid URL).</span
			>
		</div>

		<input
			id="listing_url"
			name="listing_url"
			type="text"
			placeholder="ex: https://..."
			required
			class="bg-slate-950/30 appearance-none block w-full border border-white/10 rounded-lg p-5"
			pattern="^(http(s)?:\/\/)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$"
		/>
	</label>
	<label for="is_remote" class="flex items-center space-x-2 cursor-pointer">
		<span class="small">Is this position remote?</span>
		<input
			id="is_remote"
			name="is_remote"
			type="checkbox"
			class="rounded text-orange-600 focus:ring-transparent"
		/>
	</label>
	<label for="is_contract" class="flex items-center space-x-2 cursor-pointer">
		<span class="small">Is this position contracted?</span>
		<input id="is_contract" name="is_contract" type="checkbox" />
	</label>
	<label for="is_full_time" class="flex items-center space-x-2 cursor-pointer">
		<span class="small">Is this position full-time?</span>
		<input id="is_full_time" name="is_full_time" type="checkbox" />
	</label>
	<p class="text-white/60">(*) indicates a required field.</p>
	<button
		type="submit"
		class="btn btn-primary mt-5"
		disabled={status === "loading"}
	>
		{#if status === "loading"}Loading...
		{:else}Submit
		{/if}
	</button>
</form>

{#if status === "success"}
	{#if freeSlots > 0}
		<p class="text-green-600">Your offer was submitted successfully!</p>
	{/if}
{/if}

{#if status === "error"}
	<p class="text-red-600">
		An error occured when submitting the form, please try again. If this keeps
		happening, please email your offer to <a href="mailto:support@astrojobs.net"
			><strong>support@astrojobs.net</strong></a
		>
	</p>
{/if}
