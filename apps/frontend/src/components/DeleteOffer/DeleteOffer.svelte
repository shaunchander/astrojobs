<script lang="ts">
	import { onMount } from "svelte"
	import { fade } from "svelte/transition"
	let status = ""
	let show = false
	let deleteParam: string | null
	onMount(() => {
		const params = new URLSearchParams(window.location.search)
		deleteParam = params.get("delete")
		if (deleteParam) {
			show = true
		}
	})

	const handleDelete = async () => {
		try {
			const response = await fetch("/server/delete-job-offer", {
				method: "POST",
				body: JSON.stringify({ _id: deleteParam }),
				headers: {
					"Content-Type": "application/json"
				}
			})

			if (!response.ok) {
				throw new Error("")
			}
			status = "success"
			setTimeout(() => {
				window.location.replace("/")
			}, 2000)
		} catch (err) {
			console.log(err)
			status = "error"
		}
	}
</script>

{#if show}
	<div
		transition:fade
		class="fixed inset-0 bg-black/60 flex flex-col justify-center items-center z-50"
	>
		<div
			class="p-6 w-11/12 max-w-md bg-slate-900 rounded-xl border border-white/10 text-center space-y-10"
		>
			<div class="space-y-4">
				<h2>Delete your offer?</h2>
				<p>
					Keep in mind that deleting your offer ahead of its expiry date is
					permanent and non-refundable!
				</p>
			</div>
			<div class="flex items-center gap-x-5 justify-center">
				<button class="btn btn-primary w-full" on:click={handleDelete}
					>Delete</button
				>
				<button class="btn w-full" on:click={() => (show = false)}
					>Cancel</button
				>
			</div>
			{#if status}
				<p>
					{#if status === "success"}Job offer successfully deleted!{/if}
					{#if status === "error"}An error occurred when deleting this offer.
						Please contact us (link in footer).{/if}
				</p>
			{/if}
		</div>
	</div>
{/if}
