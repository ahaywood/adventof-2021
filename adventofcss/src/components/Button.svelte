<script lang="ts">
	export let label: string;
	export let styling = 'default';
	export let link = '';
	export let podiaData = '';
</script>

<a
	href={link}
	data-podia-embed={podiaData}
	class:default={styling == 'default'}
	class:alternate={styling == 'alternate'}
>
	<svg viewBox="0 0 200 67" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg">
		<path d="M0.573242 0.994629H199.573L198.073 64.4946L0.573242 66.9946V0.994629Z" />
	</svg>

	<svg viewBox="0 0 184 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="outline">
		<path d="M1.63769 47.9946L4.51269 1.99463H179.624L182.02 47.9946H1.63769Z" stroke-width="2" />
	</svg>

	<span class="button-label">{label}</span>
</a>

<style lang="scss">
	.default {
		--fill: var(--rhino);
		--stroke: var(--bostonBlue);

		&:hover {
			--fill: var(--cloudBurst);
		}
	}

	.alternate {
		--fill: var(--amaranth);
		--stroke: var(--ceramic);

		&:hover {
			--fill: var(--crimsonGlory);
		}
	}

	a {
		background: none;
		border: none;
		cursor: pointer;
		display: block;
		font-family: var(--silverAge);
		font-size: 1.25rem;
		position: relative;
		width: 200px;
		height: 65px;
		line-height: 65px;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		fill: var(--fill);
	}

	.outline {
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		position: absolute;
		z-index: 2;
		stroke: var(--stroke);
	}

	.button-label {
		color: var(--ceramic);
		position: relative;
		top: 3px;
		z-index: 3;
	}
</style>
