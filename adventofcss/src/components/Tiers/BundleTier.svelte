<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={39} />
		<h3>Bundled with<br /> JavaScript Challenges</h3>
		<p>
			24 Challengs and Solutions for Advent of CSS <strong><em>and</em></strong>
			<a href="http://adventofjs.com" target="_blank">Advent of JavaScript</a>
		</p>
	</div>
	<div class="button">
		<Button label="Awesome!" />
	</div>
</div>

<style lang="scss">
	@import './Bundle.scss';
	@import '../../styles/Breakpoints.scss';

	.tier {
		background-image: url('./images/bg__bundle.svg');
	}
</style>
