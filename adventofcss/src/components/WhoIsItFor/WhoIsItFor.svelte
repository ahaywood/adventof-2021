<div class="wrapper">
	<div class="header">
		<h2>Who is it for?</h2>
	</div>
	<div class="content">
		<p>
			These challenges are perfect for beginner to intermediate developers (or designers) who want
			to become more comfortable with their CSS styling skills.
		</p>
		<p>
			<strong
				><em>Before accepting this challenge, you really should know basic HTML and CSS.</em
				></strong
			>
		</p>
		<p>
			You learn best through implemenation. Once you’ve applied your knowledge to a specific
			project, learning concepts are solidified.
		</p>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	.wrapper {
		background: url('./images/bg__who-is-it-for.svg');
		background-position: center top;
		background-size: 97% 100%;
		background-repeat: no-repeat;
		position: relative;
		z-index: 75;
		padding: 0 0 20px;
		box-sizing: border-box;
		width: 100%;

		@media ($tablet) {
			background-position: center 100px;
			background-size: 97% calc(100% - 100px);
		}

		@media ($medium) {
			flex: 1;
			background-position: center 70px;
			background-size: 97% calc(100% - 70px);
		}

		@media ($desktop) {
			width: 627px;
			height: 532px;
		}
	}

	.header {
		align-items: center;
		aspect-ratio: 636 / 239;
		background-image: url('./images/heading__who-is-it-for.svg');
		background-position: center top;
		background-repeat: no-repeat;
		background-size: 100% auto;
		display: flex;
		justify-content: center;
		margin-bottom: -40px;
		margin-left: auto;
		margin-right: auto;
		max-width: 636px;
		position: relative;
		top: -40px;
		width: 100vw;

		@media ($medium) {
			background-size: 100% 100%;
			width: 50vw;
		}
		@media ($desktop) {
			background-size: auto auto;
			height: 239px;
			left: -50px;
			margin-bottom: -90px;
			top: -90px;
			width: 636px;
		}

		h2 {
			color: var(--ceramic);
			font-family: var(--strangeTales);
			font-size: 2.25rem;
			font-weight: normal;
			text-transform: uppercase;
			transform: rotate(2deg);

			@media ($mobile) {
				font-size: 11vw;
			}

			@media ($tablet) {
				font-size: 4rem;
			}

			@media ($medium) {
				font-size: 3.75rem;
			}

			@media ($desktop) {
				font-size: 4rem;
			}
		}
	}

	.content {
		padding: 0 25px;

		@media ($mobile) {
			padding: 0 40px;
		}

		@media ($tablet) {
			padding: 0 85px 25px;
		}

		@media ($medium) {
			padding: 0 50px 25px;
		}
	}

	p {
		font-family: var(--body);
		font-size: 1rem;
		line-height: 1.5;
		margin-bottom: 30px;

		@media ($tablet) {
			font-size: 1.25rem;
		}
	}
</style>
