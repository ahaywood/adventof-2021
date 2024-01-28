<script>
	export let year, link;
</script>

<a href={link} target="_blank" class="login">{year}</a>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	a {
		display: inline-block;
		background: var(--rhino);
		display: inline-block;
		background: var(--silverSand);
		color: var(--oracle);
		font-family: 'League Gothic';
		font-size: 26px;
		letter-spacing: 2px;
		padding: 5px 12px;
		text-decoration: none;

		@media ($mobile) {
			padding: 10px 20px;
		}

		&:hover {
			background: var(--oracle);
			color: var(--floralWhite);
		}
	}
</style>
