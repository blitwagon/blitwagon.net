<script lang="ts">
	import '@feltcoop/felt/ui/style.css';
	import {base} from '$app/paths';

	import '$lib/style.css';
	import BackgroundPanners from '$lib/BackgroundPanners.svelte';

	let panX = 0;
	let panY = 0;
</script>

<svelte:head>
	<title>Blit Wagon</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<div class="layout">
	<div class="banner-bg" style:--pan_x="{panX}px" style:--pan_y="{panY}px" />
	<div class="root">
		<div class="content">
			<slot />
			<div class="background-panners">
				<BackgroundPanners bind:panX bind:panY />
			</div>
		</div>
	</div>
</div>

<style>
	.layout {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.root {
		position: relative;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.banner-bg {
		position: absolute;
		inset: 0;
		background-image: url('/banner.webp');
		background-repeat: repeat;
		background-position-x: calc(25% + var(--pan_x));
		background-position-y: calc(0% + var(--pan_y));
		transition: background-position 10s ease-out;
	}
	.background-panners {
		background-color: var(--overlay_tint);
		border-radius: var(--border_radius_md);
		padding: var(--spacing_lg);
	}
</style>
