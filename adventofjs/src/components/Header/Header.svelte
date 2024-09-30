<script>
	import illustration from './images/header.svg';
	import of from './images/of.svg';
	import compressedfm from './images/compressed-fm.svg';
	import LoginButton from './LoginButton.svelte';
	import AnnualButton from './AnnualButton.svelte';
</script>

<header>
	<div class="login-annual-links">
		<LoginButton />
		<AnnualButton year="2021 + 2022" link="https://2021.adventofjs.com" />
		<AnnualButton year="2023" link="https://adventofjs.com" />
	</div>
	<img src={illustration} alt="header illustration" role="presentation" class="illustration" />
	<div class="content">
		<h1>
			<div>
				<span class="advent">Advent</span>
				<span class="of"><img src={of} alt="of" width="102" height="161" /></span>
			</div>
			<span class="css">JavaScript</span>
		</h1>
		<h2>24 JavaScript Challenges for the Season</h2>
		<h3>Starts December 1, 2022</h3>
		<h4>
			<span>Powered by</span>
			<img src={compressedfm} alt="Compressed.fm" />
		</h4>
	</div>
</header>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	header {
		/* aspect-ratio: 385 / 460; */
		/* box-sizing: border-box; */
		/* min-height: 450px; */
		padding-bottom: 20px;
		position: relative;
		overflow: hidden;
		text-align: center;
		width: 100vw;
		margin-bottom: 50px;

		@media ($medium) {
			aspect-ratio: 100 / 57;
		}

		@media ($xlarge) {
			aspect-ratio: 1440 / 713;
		}
	}

	.login-annual-links {
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		gap: 8px;
		z-index: 9999;
	}

	.illustration {
		position: absolute;
		max-width: 150%;
		left: 54%;
		transform: translateX(-50%);
		top: -2%;

		@media ($tablet) {
			max-width: 115vw;
		}

		@media ($desktop) {
			width: 150%;
		}

		@media ($xlarge) {
			max-width: 100%;
			left: 50%;
		}
	}

	.content {
		/* height: 451px; */
		position: relative;
		text-align: center;
		transform: skewY(-9deg);
		width: 100vw;
		top: 8vw;
		padding-bottom: 8vw;

		@media ($tablet) {
			/* height: 580px; */
			/* left: 9px;
			top: -67px; */
			top: 6vw;
			left: 3vw;
		}

		@media ($medium) {
			left: 52%;
			transform: skewY(-9deg) translateX(-50%);
			top: 3vw;
			width: 56vw;
		}

		@media ($desktop) {
			width: 60vw;
		}

		@media ($xlarge) {
			left: 48%;
			width: 60rem;
		}
	}

	h1 {
		color: var(--ceramic);
		font-family: var(--strangeTales);
		font-size: 14vw;
		line-height: 1.5;
		text-align: center;
		text-transform: uppercase;
		font-weight: normal;
		position: relative;
		margin: 0 auto 12px;
		padding: 0;
		top: 25px;

		@media ($xsmall) {
			line-height: 1.3;
		}

		@media ($tablet) {
			font-size: 10vw;
			line-height: 1.25;
		}

		@media ($desktop) {
			font-size: 8.75rem;
		}

		@media ($xlarge) {
			font-size: 10.75rem;
		}

		div {
			width: 75vw;
			margin: 0 auto;

			@media ($medium) {
				width: auto;
				margin: 0;
			}

			@media ($desktop) {
				width: 63vw;
			}
		}
	}

	.of {
		display: inline-block;
		position: relative;
		/* width: 40px; */
		right: 5%;
		top: 4vw;

		@media ($tablet) {
			right: 4%;
			top: 30px;
		}

		@media ($desktop) {
			right: 42px;
			top: 45px;
			/* height: 161px; */
			/* width: 102px; */
		}

		img {
			aspect-ratio: 102 / 161;
			height: 100%;
			width: 10vw;

			@media ($tablet) {
				width: 7vw;
			}

			@media ($desktop) {
				width: 100%;
			}
		}
	}

	.css {
		position: relative;
		top: -25px;
	}

	/* 24 challenges for the holiday season */
	h2 {
		font-family: var(--silverAge);
		color: var(--amaranth);
		font-size: 1.75rem;
		font-weight: normal;
		line-height: 1.2;
		padding: 0;
		margin: 0 auto 10px;
		max-width: 240px;
		text-align: center;

		@media ($small) {
			margin-bottom: 30px;
			max-width: 100%;
		}

		@media ($tablet) {
			font-size: 3.5vw;
		}

		@media ($medium) {
			font-size: 3.15vw;
		}

		@media ($desktop) {
			font-size: 2.25rem;
			margin: 0 0 10px;
			max-width: 100%;
		}
	}

	/* starts december 1 */
	h3 {
		background: var(--oracle);
		display: inline-block;
		text-transform: uppercase;
		font-family: var(--silverAge);
		color: var(--ceramic);
		font-size: 5vw;
		font-weight: normal;
		margin: 0 auto 10px;
		position: relative;
		padding: 6px 9px;

		@media ($tablet) {
			font-size: 3.5vw;
			padding: 10px 25px;
		}

		@media ($desktop) {
			font-size: 2.75rem;
		}
	}

	/* powered by Compressed.fm */
	h4 {
		font-family: var(--silverAge);
		text-transform: uppercase;
		color: white;
		font-weight: normal;
		font-size: 6vw;
		display: flex;
		align-items: flex-start;
		gap: 10px;
		justify-content: center;
		margin: 0;
		padding: 0;

		@media ($small) {
			font-size: 4vw;
		}

		@media ($tablet) {
			font-size: 1.5rem;
		}

		span {
			margin-top: 5px;
		}
	}
</style>
