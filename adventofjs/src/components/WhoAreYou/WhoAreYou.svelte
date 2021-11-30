<script>
	import hello from './images/hello.svg';
	import avatar from './images/avatar.png';
	import avatar2x from './images/avatar@2x.png';
</script>

<div class="wrapper">
	<div class="heading">
		<h2>Who Are You?</h2>
	</div>
	<div class="bottom">
		<div class="avatar">
			<img
				src={avatar}
				alt="James Q Quick"
				srcset="{avatar} 1x, {avatar2x} 2x"
				class="profile-pic"
			/>
		</div>
		<div class="content">
			<img src={hello} alt="Hello" class="hello" /> My name is
			<a href="http://twitter.com/selfteachme" title="SelfTeach.me">James Q Quick</a>. I’m a Staff
			Developer Advocate at <a href="https://planetscale.com/" target="_blank">PlanetScale</a>. I
			co-host a podcast called
			<a href="http://compressed.fm" target="_blank">Compressed.fm</a> and teach developers through content.
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';
	.wrapper {
		background-image: url('./images/bg__who-are-you.svg');
		background-position: center 25px;
		background-size: 97% 96%;
		background-repeat: no-repeat;
		box-sizing: border-box;
		margin-bottom: 50px;
		display: block;
		position: relative;
		z-index: 70;

		@media ($small) {
			background-size: 97% calc(100% - 105px);
			background-position: center 105px;
		}

		@media ($medium) {
			background-size: 97% calc(100% - 70px);
			background-position: center 70px;
			flex: 1;
		}

		@media ($desktop) {
			width: 627px;
			height: 532px;
		}
	}

	.heading {
		aspect-ratio: 720 / 227;
		background-image: url('./images/heading__who-are-you.svg');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: 100% auto;
		max-width: 720px;
		text-align: center;
		margin-left: auto;
		margin-right: auto;

		@media ($mobile) {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		@media ($medium) {
			/* top: -70px; */
			/* position: relative; */
			/* margin-bottom: -70px; */
			width: 50vw;
		}

		h2 {
			align-items: center;
			color: var(--ceramic);
			display: flex;
			font-family: var(--strangeTales);
			font-size: 10vw;
			font-weight: normal;
			justify-content: center;
			line-height: 1;
			margin: 0 auto;
			position: relative;
			text-transform: uppercase;
			top: 32px;
			transform: rotate(2deg);

			@media ($mobile) {
				/* line-height: 130%; */
				top: -6px;
			}

			@media ($tablet) {
				font-size: 4rem;
				/* height: 227px; */
				top: -2px;
				/* width: 721px; */
			}

			@media ($medium) {
				font-size: 3.75rem;
			}

			@media ($desktop) {
				font-size: 4rem;
			}
		}
	}

	.bottom {
		display: flex; /* stacked */
		flex-direction: column;

		@media ($small) {
			flex-direction: row; /* side-by-side */
			gap: 30px;
			padding-right: 50px;
		}

		@media ($medium) {
			flex-direction: column; /* stacked */
			gap: 0;
			padding-right: 0;
		}

		@media ($desktop) {
			flex-direction: row; /* side-by-side */
			gap: 30px;
			padding-right: 50px;
		}
	}

	.content {
		font-family: var(--body);
		font-size: 1rem;
		line-height: 1.5;
		text-align: left;
		text-indent: -20px;
		padding: 0 25px 25px 40px;

		@media ($mobile) {
			padding: 0 50px 50px;
		}

		@media ($small) {
			padding: 0 0 50px 30px;
		}

		@media ($tablet) {
			font-size: 1.25rem;
		}

		@media ($medium) {
			padding: 0 50px 50px; /* more padding for stacked */
		}

		@media ($desktop) {
			padding: 0 0 50px 30px; /* less padding for side-by-side */
		}

		a {
			color: black;
			font-weight: bold;
		}
	}

	.avatar {
		position: relative;
		display: inline-block;
		margin: 0 auto;
		top: -30px;

		/* holly on the left */
		&:before {
			content: '';
			background: url('./images/holly-leaves--left.svg') left bottom no-repeat;
			display: block;
			width: 117px;
			height: 127px;
			position: absolute;
			left: -25px;
			bottom: -45px;

			@media ($desktop) {
				bottom: 20px;
			}
		}

		/* holly on the right */
		&:after {
			background: url('./images/holly-leaves--right.svg') left bottom no-repeat;
			bottom: -17px;
			content: '';
			display: block;
			height: 109px;
			position: absolute;
			right: -24px;
			width: 118px;

			@media ($desktop) {
				bottom: 20px;
			}
		}

		img {
			width: 240px;
		}

		.profile-pic {
			border-radius: 50%;
		}
	}
</style>
