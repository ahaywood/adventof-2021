<script>
	export let text = '';
	export let size = 'short';
</script>

<div class="header" class:short={size == 'short'} class:long={size == 'long'}>
	<div class="text">{text}</div>
	<div class="shadow">{text}</div>
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

		&.short {
			--textColor: var(--oracle);
			--textShadow: var(--ceramic);
			aspect-ratio: 925/172;
			background-size: 925px 172px;
			background-image: url('./images/heading-bg.svg');
			background-position: center -2px;
			background-repeat: no-repeat;
			background-size: 100% auto;
			max-height: 172px;
			max-width: 925px;

			@media ($tablet) {
				background-position: center -5px;
			}
		}

		&.long {
			--textColor: var(--ceramic);
			--textShadow: var(--rhino);
			aspect-ratio: 1215/168;
			background-image: url('./images/heading--long.svg');
			background-size: 100% auto;
			background-position: center top;
			background-repeat: no-repeat;

			@media ($desktop) {
				background-size: 1281px 172px;
				height: 172px;
				width: 1281px;
			}
		}

		.text {
			color: var(--textColor);
			margin-left: -3px;
			margin-top: -3px;
			position: relative;
			z-index: 2;

			@media ($tablet) {
				margin-left: -5px;
				margin-top: -5px;
			}
		}

		.shadow {
			color: var(--textShadow);
			line-height: 1;
			position: absolute;
			z-index: 1;
		}
	}
</style>
