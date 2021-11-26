<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={24} />
		<h3>24 Challenges & Solutions</h3>
		<p>
			Each challenge includes <strong>all the HTML and CSS you need to get started</strong>,
			allowing you to focus on the JavaScript. Each challenge also includes a brief,
			ways to push yourself, and steps to help you get you started.</p>
		<p>
			You'll also receive the final coded solution and an explanation of how to get there.
		</p>
	</div>
	<div class="button">
		<Button
			label="Yes, Please!"
			styling="alternate"
			link="https://gumroad.com/l/wTNep?wanted=true"
		/>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';
	@import './Bundle.scss';
	.tier {
		background-image: url('./images/bg__solution.svg');
	}
</style>
