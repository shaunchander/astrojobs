<script lang="ts">
	import Image from "@svg/icons/image.svelte"

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault()

		const formData = new FormData(e.target as HTMLFormElement)

		formData.forEach((value, key) => {
			console.log(key, value)
		})
	}
</script>

<form action="" class="grid gap-4" on:submit={handleSubmit}>
	<label for="company_name" class="block space-y-2">
		<span class="small">Company Name*</span>
		<input
			id="company_name"
			name="company_name"
			type="text"
			placeholder="Your company name..."
			required
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="company_logo" class="block space-y-2">
		<span class="small">Company Logo*</span>

		<div
			class="bg-stone-950/40 appearance-none flex flex-col justify-center items-center w-full border border-white/10 rounded-lg h-48 text-stone-500 cursor-pointer space-y-4"
		>
			<input
				id="company_logo"
				name="company_logo"
				type="file"
				accept="image/png, image/jpg, image/svg+xml"
				required
				placeholder="Your company name..."
				class="opacity-0 absolute inset-0 placeholder:text-stone-500"
			/>
			<Image />
			<p class="small">Drop your logo...</p>
		</div>
	</label>
	<label for="role_title" class="block space-y-2">
		<span class="small">Role Title</span>
		<input
			id="role_title"
			name="role_title"
			type="text"
			placeholder="ex: Senior Frontend Engineer"
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="meta_framework" class="block space-y-2">
		<div>
			<span class="small">Meta framework</span>
			<span class="tiny block text-white/60"
				>If you need a developer that knows a particular framework, set it here.</span
			>
		</div>
		<select
			id="meta_framework"
			name="meta_framework"
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
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
	</label>
	<label for="salary_left_bound" class="block space-y-2">
		<span class="small">Salary (lower end)</span>
		<input
			id="salary_left_bound"
			name="salary_left_bound"
			type="number"
			placeholder="ex: 95000"
			min="0"
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="salary_right_bound" class="block space-y-2">
		<span class="small">Salary (upper end)</span>
		<input
			id="salary_right_bound"
			name="salary_right_bound"
			type="number"
			placeholder="ex: 150000"
			min="0"
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>

	<label for="location" class="block space-y-2">
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
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="listing_url" class="block space-y-2">
		<div>
			<span class="small block">Listing Url*</span>
			<span class="tiny block text-white/60"
				>This is where applicants should submit their application.</span
			>
		</div>

		<input
			id="listing_url"
			name="listing_url"
			type="text"
			placeholder="ex: https://..."
			required
			class="bg-stone-950/40 appearance-none block w-full border border-white/10 rounded-lg p-5"
		/>
	</label>
	<label for="is_remote" class="flex items-center space-x-2">
		<span class="small">Is this position remote?</span>
		<input id="is_remote" name="is_remote" type="checkbox" />
	</label>
	<label for="is_contract" class="flex items-center space-x-2">
		<span class="small">Is this position contracted?</span>
		<input id="is_contract" name="is_contract" type="checkbox" />
	</label>
	<label for="is_full_time" class="flex items-center space-x-2">
		<span class="small">Is this position full-time?</span>
		<input id="is_full_time" name="is_full_time" type="checkbox" />
	</label>
	<p>(*) indicates a required field.</p>
	<button type="submit" class="btn btn-primary mt-5">Submit</button>
</form>
