<script>
	import login from './images/login.svg';
</script>

<a href="#https://store.selfteach.me/login" target="_blank" class="login"
	><img src={login} alt="LOGIN" /></a
>

<style lang="scss">
	a {
		display: inline-block;
		background: var(--rhino);
		padding: 10px 20px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 9999;

		&:hover {
			background: var(--amaranth);
		}
	}
</style>
