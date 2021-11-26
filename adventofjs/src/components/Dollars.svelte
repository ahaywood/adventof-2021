<script lang="ts">
	export let dollars: number;
</script>

<div class="money">
	<div class="foreground">
		<span class="dollar-sign">$</span><span class="dollars">{dollars}</span>
	</div>
	<div class="shadow">
		<span class="dollar-sign">$</span><span class="dollars">{dollars}</span>
	</div>
</div>

<style lang="scss">
	@import '../styles/Breakpoints.scss';

	.money {
		align-items: flex-start;
		color: var(--amaranth);
		font-family: var(--strangeTales);
		position: relative;

		.foreground,
		.shadow {
			display: flex;
			justify-content: center;
		}

		.foreground {
			position: relative;
			z-index: 2;
		}

		.shadow {
			color: var(--blueZodiac);
			position: absolute;
			z-index: 1;
			top: 3px;
			left: calc(50% + 3px);
			transform: translateX(-50%);
		}
	}

	.dollar-sign {
		font-size: 3rem;

		@media ($tablet) {
			font-size: 5rem;
		}
	}

	.dollars {
		font-size: 5rem;

		@media ($tablet) {
			font-size: 7.75rem;
		}
	}
</style>
