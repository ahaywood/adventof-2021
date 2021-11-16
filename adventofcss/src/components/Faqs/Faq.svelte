<script>
	import './Faq.scss';
	import { fade, slide } from 'svelte/transition';
	import bullet from './images/bullet.svg';

	export let faq;
	let visible = false;
</script>

<li>
	<button on:click={() => (visible = !visible)} class="question">
		<img src={bullet} alt="bullet" class="bullet" class:close={visible} />
		{faq.question}
	</button>
	{#if visible}
		<div class="answer" transition:slide>
			{@html faq.html}
		</div>
	{/if}
</li>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	li {
		margin-bottom: 30px;
	}

	.bullet {
		transition: transform 0.1s ease-in-out;
	}

	.close {
		transform: rotate(45deg);
	}

	.question {
		background: none;
		border: none;
		cursor: pointer;
		text-transform: uppercase;
		font-family: var(--silverAge);
		color: var(--rhino);
		font-size: 1rem;
		text-align: left;
		padding-left: 42px;
		position: relative;

		@media ($tablet) {
			font-size: 1.5rem;
		}

		img {
			position: absolute;
			left: 0px;
			top: -10px;

			@media ($tablet) {
				top: 0px;
			}
		}
	}

	.answer {
		font-family: var(--body);
		padding-left: 60px;
		position: relative;
		margin: 10px;
		font-size: 1.25rem;
		line-height: 1.4;

		&:before {
			position: absolute;
			left: 35px;
			top: 0;
			height: 100%;
			content: '';
			display: block;
			border-left: 3px solid var(--pastelBlue);
			transform: rotate(-1deg);
		}
	}
</style>
