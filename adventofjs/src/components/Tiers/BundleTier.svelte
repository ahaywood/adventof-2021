<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={39} />
		<h3>Bundled with<br /> CSS Challenges</h3>
		<p>
			All 24 JavaScript Challenges and their solutions. <strong><em>Plus</em></strong> 24
			CSS challenges and their solutions from
			<a href="http://adventofcss.com" target="_blank">Advent of CSS</a>.
		</p>
	</div>
	<div class="button">
		<Button
			label="Awesome!"
			link="https://gumroad.com/l/pbWkd"
		/>
	</div>
</div>

<style lang="scss">
	@import './Bundle.scss';
	@import '../../styles/Breakpoints.scss';

	.tier {
		background-image: url('./images/bg__bundle.svg');
	}
</style>
