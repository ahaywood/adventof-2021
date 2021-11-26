<script>
	import Dollars from '../Dollars.svelte';
	import Button from '../Button.svelte';
</script>

<div class="tier">
	<div class="content">
		<Dollars dollars={0} />
		<h3>24 Challenges</h3>
		<p>
			Each challenge includes <strong>all the HTML and CSS you need to get started</strong>, that way you can focus on the JavaScript! Each challenge also includes a brief, suggestions to challenge yourself,
			and points to help you get you started.
		</p>
	</div>
	<div class="button">
		<Button link="#" label="Sign me up!" />
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
