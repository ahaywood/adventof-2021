<script>
	import login from './images/login.svg';
</script>

<a href="#https://store.selfteach.me/login" target="_blank" class="login"
	><img src={login} alt="LOGIN" /></a
>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	a {
		display: inline-block;
		background: var(--rhino);
		padding: 5px 12px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 9999;

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
