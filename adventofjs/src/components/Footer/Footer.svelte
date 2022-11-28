<script>
	import Twitch from '../icons/Twitch.svelte';
	import CodePen from '../icons/CodePen.svelte';
	import GitHub from '../icons/GitHub.svelte';
	import Instagram from '../icons/Instagram.svelte';
	import Twitter from '../icons/Twitter.svelte';
	import YouTube from '../icons/YouTube.svelte';
	import { Constants } from '../../utils/constants';
</script>

<footer>
	<!-- SOOCIAL MEDIA -->
	<ul class="social-media">
		{#if Constants.TWITCH}
			<li>
				<!-- TWITCH -->
				<a href={Constants.TWITCH} target="_blank">
					<Twitch />
				</a>
			</li>
		{/if}

		{#if Constants.INSTAGRAM}
			<li>
				<!-- INSTAGRAM -->
				<a href={Constants.INSTAGRAM} target="_blank">
					<Instagram />
				</a>
			</li>
		{/if}

		{#if Constants.TWITTER}
			<li>
				<!-- TWITTER -->
				<a href={Constants.TWITTER} target="_blank">
					<Twitter />
				</a>
			</li>
		{/if}

		{#if Constants.YOUTUBE}
			<li>
				<!-- YOUTUBE -->
				<a href={Constants.YOUTUBE} target="_blank"><YouTube /></a>
			</li>
		{/if}

		{#if Constants.CODEPEN}
			<li>
				<!-- CODEPEN -->
				<a href={Constants.CODEPEN} target="_blank">
					<CodePen />
				</a>
			</li>
		{/if}

		<li>
			<!-- GITHUB -->
			<a href="http://github.com/ahaywood" target="_blank">
				<GitHub />
			</a>
		</li>
	</ul>

	<!-- LINKS -->
	<nav>
		<ul>
			<li><a href="/support">Contact / Support</a></li>
			<li><a href="/legal/terms-and-conditions">Terms and Conditions</a></li>
			<li><a href="/legal/disclaimers">Disclaimers</a></li>
			<li><a href="/legal/privacy-policy">Privacy Policy</a></li>
		</ul>
	</nav>

	<p class="copyright">
		<span
			>Copyright &copy;2022. <a href="http://ahhacreative.com" target="_blank"
				>Ah Ha Creative, LLC.</a
			></span
		>
		<span>All Rights Reserved.</span>
	</p>
</footer>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	footer {
		background: url('./images/bg.svg') center top no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		padding: 125px 0 60px;
		position: relative;
		z-index: 999;
	}

	.social-media {
		display: flex;
		justify-content: center;
		gap: 20px;
		list-style-type: none;
		padding: 0;
		margin: 0 0 75px 0;
		flex-wrap: wrap;

		@media ($xsmall) {
			flex-wrap: no-wrap;
			gap: 40px;
		}

		a {
			color: var(--malibu);

			&:hover {
				color: var(--silverSand);
			}
		}
	}

	nav {
		margin-bottom: 80px;

		ul {
			align-items: center;
			display: flex;
			flex-direction: column;
			gap: 20px;
			list-style-type: none;
			justify-content: center;
			padding: 0;
			margin: 0;

			@media (min-width: 845px) {
				gap: 40px;
				flex-direction: row;
			}

			li {
				font-family: var(--silverAge);
				margin: 0;
				padding: 0;
				text-transform: uppercase;

				@media (min-width: 845px) {
					background: url('./images/x.svg') right center no-repeat;
					margin: 0 0 0 -15px;
					padding: 0 50px 0 0;
				}

				&:first-child {
					margin-left: 0;
				}

				&:last-child {
					background: none;
					margin-right: 0;
					padding-right: 0;
				}
			}

			a {
				color: var(--ceramic);
				text-decoration: none;

				&:hover {
					color: var(--silverSand);
				}
			}
		}
	}

	.copyright {
		color: var(--darkPastelBlue);
		font-family: var(--body);
		font-size: 0.875rem;
		text-align: center;

		@media (min-width: 769px) {
			font-size: 1rem;
		}

		span {
			display: block;

			@media ($xsmall) {
				display: inline;
			}
		}

		a {
			color: var(--darkPastelBlue);

			&:hover {
				color: var(--silverSand);
			}
		}
	}
</style>
