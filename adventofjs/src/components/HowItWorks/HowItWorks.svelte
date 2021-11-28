<script>
	import SectionHeader from '$components/SectionHeader/SectionHeader.svelte';

	// images
	import stepOne from './images/step-one.svg';
	import stepTwo from './images/step-two.svg';
	import stepThree from './images/step-three.svg';
</script>

<div class="grid">
	<div class="wrapper">
		<div class="header">
			<SectionHeader text="How It Works" />
		</div>

		<div class="step">
			<div class="step__image">
				<img src={stepOne} alt="Step One" />
			</div>
			<div>
				<h3>For 24 days, you’will get an email outlining a JavaScript challenge</h3>
				<p>Each challenge includes:</p>
				<ul>
					<li>
						All the HTML and CSS you need to get started, allowing you to focus on the JavaScript.
					</li>
					<li>
						A brief on how to get started, ways to push yourself, and steps to help you get
						started..
					</li>
				</ul>
			</div>
		</div>

		<div class="step">
			<div class="step__image">
				<img src={stepTwo} alt="Step Two" />
			</div>
			<div>
				<h3>Complete the challenge</h3>
				<p>
					Complete the challenge on your own, or refer to the (paid) tutorial and final coded
					solution.
				</p>
			</div>
		</div>

		<div class="step">
			<div class="step__image">
				<img src={stepThree} alt="Step Three" />
			</div>
			<div>
				<h3>Share your success.</h3>
				<p>
					When you’re finished call you mom! Tweet about it! Post a picture on Instagram. Talk about
					it on Facebook. Use the hashtag <strong>#adventofjs</strong>.
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	.grid {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: var(--grid);
		max-width: var(--pageWidth);
		margin: 0 auto 40px;
		position: relative;
		z-index: 60;
	}

	.wrapper {
		background: var(--blueZodiac);
		grid-column: 2 / -2;

		@media ($medium) {
			grid-column: 4 / -1;
		}
	}

	.header {
		text-align: center;
	}

	.step {
		align-items: flex-start;
		display: flex;
		gap: 10px;
		margin-bottom: 40px;
		flex-direction: column;

		@media ($xsmall) {
			gap: 0;
			flex-direction: row;
		}

		&__image {
			margin-right: 20px;
			text-align: right;
		}
	}

	h3 {
		font-family: var(--silverAge);
		color: var(--ceramic);
		font-size: 1.25rem;
		line-height: 1.3;
		font-weight: normal;
		padding: 0;
		margin: 0;

		@media ($tablet) {
			font-size: 2.25rem;
		}
	}

	p,
	li {
		color: var(--ceramic);
		font-family: var(--body);
		font-size: 1rem;
		line-height: 1.5;

		@media ($tablet) {
			font-size: 1.25rem;
		}
	}

	li a {
		color: var(--ceramic);
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}
</style>
