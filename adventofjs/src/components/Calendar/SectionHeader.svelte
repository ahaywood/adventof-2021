<div class="header long">
	<div class="text">24 days <span>x</span> 24 Challenges</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	.header {
		align-items: center;
		display: flex;
		font-family: var(--strangeTales);
		font-size: 6vw;
		justify-content: center;
		line-height: 1;
		margin-bottom: 25px;
		position: relative;
		text-transform: uppercase;

		@media ($desktop) {
			font-size: 4.75rem;
		}

		&.long {
			--textColor: var(--ceramic);
			--textShadow: var(--rhino);
			aspect-ratio: 1215/168;
			background-image: url('../SectionHeader/images/heading--long.svg');
			background-size: 100% auto;
			background-position: center center;
			background-repeat: no-repeat;
			padding-bottom: 10px;

			@media ($desktop) {
				background-size: 1281px 172px;
				height: 172px;
				width: 1281px;
			}
		}

		.text {
			color: var(--textColor);
			margin-left: -5px;
			margin-top: -10px;
			position: relative;
			z-index: 2;

			span {
				color: var(--malibu);
				font-size: 2rem;
				position: relative;
				top: 10px;

				@media ($xsmall) {
					font-size: 7rem;
				}
			}
		}
	}
</style>
