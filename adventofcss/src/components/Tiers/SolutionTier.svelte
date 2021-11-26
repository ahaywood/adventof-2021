<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={24} />
		<h3>24 Challenges & Solutions</h3>
		<p>
			Each challenge includes all the assets you need to get started, including a
			<a href="http://figma.com" target="_blank">Figma</a> file, a style guide,
			a brief, ways to push yourself, and steps to help you get started.
		</p>
		<p>
			You'll also receive the final coded solution and a tutorial explaining how
			to get there.
		</p>
	</div>
	<div class="button">
		<Button
			label="Yes, Please!"
			styling="alternate"
			link="https://gumroad.com/l/PWngBj"
		/>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';
	@import './Bundle.scss';
	.tier {
		background-image: url('./images/bg__solution.svg');
	}

	p {
		margin-bottom: 25px !important;
	}

	p + p {
		margin-bottom: 0 !important;
	}
</style>
