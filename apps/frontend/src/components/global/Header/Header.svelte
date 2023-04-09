<script lang="ts">
	import Container from "@component/utils/Container/Container.svelte"
</script>

<header
	class="sticky top-0 z-50 inset-x-0 p-6 bg-zinc-100 dark:bg-slate-950/30 backdrop-blur-md"
>
	<Container>
		<nav class="flex items-center justify-between">
			<div>
				<a href="/" class="text-2xl font-black"
					>🚀 Astro<span class="text-orange-600">Jobs</span></a
				>
			</div>
			<div class="flex items-center gap-x-5">
				<div>
					<ul class="flex items-center gap-x-5">
						<li>
							<a href="/post-an-offer" class="btn btn-primary">Post an offer</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</Container>
</header>
