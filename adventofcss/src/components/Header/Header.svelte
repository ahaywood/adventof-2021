<script>
	import illustration from './images/header.svg';
	import of from './images/of.svg';
	import compressedfm from './images/compressed-fm.svg';
	import LoginButton from './LoginButton.svelte';
	import AnnualButton from './AnnualButton.svelte';
</script>

<header>
	<div class="login-annual-buttons">
		<LoginButton />
		<AnnualButton year="2021 + 2022" link="https://2021.adventofcss.com" />
		<AnnualButton year="2023" link="https://adventofcss.com" />
	</div>
	<img src={illustration} alt="header illustration" role="presentation" class="illustration" />
	<div class="content">
		<h1>
			<span class="advent">Advent</span>
			<div>
				<span class="of"><img src={of} alt="of" width="102" height="161" /></span>
				<span class="css">CSS</span>
			</div>
		</h1>
		<h2>24 CSS Challenges for the Season</h2>
		<h3>Starts December 1, 2022</h3>
		<h4>
			<span>Powered by</span>
			<img src={compressedfm} alt="Compressed.fm" />
		</h4>
	</div>
</header>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	.login-annual-buttons {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
		display: flex;
		gap: 4px;
	}

	header {
		box-sizing: border-box;
		min-height: 420px;
		position: relative;
		overflow: hidden;
		width: 100vw;

		@media ($tablet) {
			min-height: 768px;
		}

		@media ($xlarge) {
			aspect-ratio: 1440 / 700;
		}
	}

	.annual-links {
		display: flex;
		gap: 8px;
		right: 0;
		top: 0;
		display: flex;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 9999;
	}

	.illustration {
		position: absolute;
		right: -40px;
		width: 768px;

		@media ($mobile) {
			right: 0;
		}

		@media ($tablet) {
			width: 1600px;
		}

		@media ($xlarge) {
			width: 100%;
			left: 0;
		}
	}
	.content {
		transform: skewY(-9deg) scale(0.5);
		height: 580px;
		width: 645px;
		right: -170px;
		top: -118px;
		position: absolute;

		@media ($mobile) {
			right: -129px;
		}

		@media ($tablet) {
			right: 70px;
			top: 50px;
			transform: skewY(-9deg);
		}

		@media ($xlarge) {
			right: 5%;
		}
	}

	h1 {
		color: var(--amaranth);
		font-family: var(--strangeTales);
		font-size: 10rem;
		line-height: 0.9;
		text-transform: uppercase;
		font-weight: normal;
		position: relative;
		margin: 0 0 10px 0;
		padding: 0;
		top: 25px;
	}

	.of {
		width: 102px;
		height: 161px;
		display: inline-block;
		position: relative;
		left: 20px;
		top: -30px;
		margin-right: -20px;
	}

	.css {
		position: relative;
		top: -25px;
	}

	h2 {
		font-family: var(--silverAge);
		color: var(--rhino);
		font-size: 2.25rem;
		font-weight: normal;
		padding: 0;
		margin: 0 0 10px;
	}

	h3 {
		background: var(--oracle);
		display: inline-block;
		text-transform: uppercase;
		font-family: var(--silverAge);
		color: var(--ceramic);
		font-size: 2.75rem;
		padding: 10px 25px;
		font-weight: normal;
		margin: 0 0 10px;
	}

	h4 {
		font-family: var(--silverAge);
		text-transform: uppercase;
		color: var(--rhino);
		font-weight: normal;
		font-size: 1.5rem;
		display: flex;
		align-items: flex-start;
		gap: 10px;
		justify-content: center;
		margin: 0;
		padding: 0;

		span {
			margin-top: 5px;
		}
	}
</style>
