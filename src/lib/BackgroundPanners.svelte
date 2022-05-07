<script lang="ts">
	export let panX = 0;
	export let panY = 0;
	export let panXAmount = 512;
	export let panYAmount = 512;

	const keysLeft = new Set(['ArrowLeft', 'a', 'q', 'z']);
	const keysRight = new Set(['ArrowRight', 'd', 'e', 'x', 'c']);
	const keysUp = new Set(['ArrowUp', 'w', 'q', 'e']);
	const keysDown = new Set(['ArrowDown', 's', 'z', 'x', 'c']);

	const pan = (x: number, y: number) => {
		panX -= x * panXAmount;
		panY -= y * panYAmount;
	};
</script>

<svelte:window
	on:keydown={(e) => {
		if (keysLeft.has(e.key)) {
			pan(-1, 0);
		}
		if (keysRight.has(e.key)) {
			pan(1, 0);
		}
		if (keysUp.has(e.key)) {
			pan(0, -1);
		}
		if (keysDown.has(e.key)) {
			pan(0, 1);
		}
	}}
/>

<div class="panners">
	<button class="icon-button" on:click={() => pan(-1, 0)}>←</button>
	<div class="vertical-panners">
		<button class="icon-button" on:click={() => pan(0, -1)}>↑</button>
		<button class="icon-button" on:click={() => pan(0, 1)}>↓</button>
	</div>
	<button class="icon-button" on:click={() => pan(1, 0)}>→</button>
</div>

<style>
	.panners {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		font-size: var(--font_size_xl3);
		width: 8rem;
		background: transparent;
		color: var(--link_color);
		box-shadow: none;
		border: none;
	}
	button:hover {
		transform: scale3d(1.17, 1.17, 1.17);
	}
	button:active {
		transform: scale3d(1.27, 1.27, 1.27);
	}
</style>
