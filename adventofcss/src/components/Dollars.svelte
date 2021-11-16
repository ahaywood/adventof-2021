<script lang="ts">
	export let dollars: number;
</script>

<div class="money">
	<span class="dollar-sign">$</span><span class="dollars">{dollars}</span>
</div>

<style lang="scss">
	@import '../styles/Breakpoints.scss';

	.money {
		align-items: flex-start;
		color: var(--rhino);
		display: flex;
		font-family: var(--strangeTales);
		justify-content: center;
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
