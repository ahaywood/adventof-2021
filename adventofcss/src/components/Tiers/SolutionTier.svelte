<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={24} />
		<h3>24 Challenges & Solutions</h3>
		<p>
			Each challenge includes: a <a href="http://figma.com" target="_blank">Figma</a> file, a brief to
			get you started, a tutorial explaining the solution, final code, and a support forum.
		</p>
	</div>
	<div class="button">
		<Button
			label="Yes, Please!"
			styling="alternate"
			link="https://gumroad.com/l/PWngBj?wanted=true"
		/>
		<script src="https://gumroad.com/js/gumroad.js"></script>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';
	@import './Bundle.scss';
	.tier {
		background-image: url('./images/bg__solution.svg');
	}
</style>
