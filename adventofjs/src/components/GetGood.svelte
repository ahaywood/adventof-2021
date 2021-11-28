<script>
	import SectionHeader from '$components/SectionHeader/SectionHeader.svelte';
</script>

<div class="grid">
	<div class="wrapper">
		<SectionHeader text="Get Good at JS" />
		<p>
			The best way to learn is through real world projects and components. Build things! Practice.
			Challenge yourself. Not sure what to build? With Advent of JavaScript, you'll get 24
			challenges via email, every day, December 1 - 24, 2021.
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
		background: var(--blueZodiac);
		grid-column: 2 / -2;

		@media ($medium) {
			grid-column: 4 / -1;
		}
	}

	p {
		color: white;
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
