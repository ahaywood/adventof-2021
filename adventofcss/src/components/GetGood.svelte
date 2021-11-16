<script>
	import SectionHeader from '$components/SectionHeader/SectionHeader.svelte';
</script>

<div class="grid">
	<div class="wrapper">
		<SectionHeader text="Get Good at CSS" />
		<p>Learn CSS by doing, through real world projects and components.</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>
</div>

<style lang="scss">
	@import '../styles/Breakpoints.scss';

	.grid {
		display: grid;
		grid-template-columns: var(--grid);
		margin: 0 auto 40px;
		max-width: var(--pageWidth);
		position: relative;
		z-index: 65;
	}

	.wrapper {
		background: var(--ceramic);
		grid-column: 2 / -2;

		@media ($medium) {
			grid-column: 4 / -1;
		}
	}

	p {
		font-family: var(--body);
		font-size: 1rem;
		line-height: 1.5;
		padding: 0px 0px 0;
		margin-bottom: 20px;

		@media ($tablet) {
			padding: 0px 60px 0;
			font-size: 1.25rem;
		}

		&:last-child {
			margin-bottom: 60px;
		}
	}
</style>
