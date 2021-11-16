<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={0} />
		<h3>24 Challenges</h3>
		<p>
			Each challenge includes a <a href="http://figma.com" target="_blank">Figma</a> file and a brief
			to get you started.
		</p>
	</div>
	<div class="button">
		<Button link="#" label="Sign me up!" podiaData="#" />
	</div>
</div>

<style lang="scss">
	@import './Bundle.scss';
	@import '../../styles/Breakpoints.scss';
	.tier {
		background-image: url('./images/bg__free.svg');
		background-position: center top;
		background-repeat: no-repeat;
	}
</style>
