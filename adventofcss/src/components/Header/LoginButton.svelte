<script>
	import login from './images/login.svg';
</script>

<a href="https://store.selfteach.me/login" target="_blank" class="login">LOGIN</a>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	a {
		display: inline-block;
		background: var(--rhino);
		color: var(--floralWhite);
		font-family: 'League Gothic';
		font-size: 26px;
		letter-spacing: 2px;
		padding: 5px 12px;
		text-decoration: none;

		@media ($mobile) {
			padding: 10px 20px;
		}

		&:hover {
			background: var(--amaranth);
		}

		img {
			width: 35px;

			@media ($mobile) {
				width: 54px;
			}
		}
	}
</style>
