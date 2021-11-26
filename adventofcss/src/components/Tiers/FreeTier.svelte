<script lang="ts">
	import Button from "$components/Button.svelte"
	import Dollars from '../Dollars.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={0} />
		<h3>24 Challenges</h3>
		<p>
			Each challenge includes all the assets you need to get started, including a
			<a href="http://figma.com" target="_blank">Figma</a> file, a style guide,
			a brief, ways to push yourself, and steps to help you get started.
		</p>
	</div>
	<div class="button">
		<Button link="/free" label="Sign me up!" />
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
