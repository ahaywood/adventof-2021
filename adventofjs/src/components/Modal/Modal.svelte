<script lang="ts">
	import kwesforms from 'kwesforms';
	import { onMount } from 'svelte';
	import './Modal.css';
	import Button from './Button.svelte';

	onMount(() => {
		kwesforms.init();
	});
</script>

<div class="overlay" />
<div class="close">
	<a href="/">×</a>
</div>
<div class="wrapper">
	<div class="content">
		<h2>Receive Free Challenges in Your Inbox</h2>
		<form
			class="kwes-form"
			action="https://kwesforms.com/api/foreign/forms/wNeFKVltY94K0R3RWvJT"
			method="post"
		>
			<div class="fields">
				<div>
					<label for="firstName">First Name*</label>
					<input type="text" name="firstName" id="firstName" rules="required" />
				</div>
				<div>
					<label for="email">Email*</label>
					<input type="text" name="email" id="email" rules="required|email" />
				</div>
				<Button label="Count me in!" />
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	@import '../../styles/Breakpoints.scss';

	.overlay {
		background: rgba(256, 256, 256, 0.95);
		bottom: 0;
		height: 100vw;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		width: 100vw;
		z-index: 9000;
	}

	.close {
		align-items: center;
		background: var(--amaranth);
		display: flex;
		height: 50px;
		justify-content: center;
		position: fixed;
		right: 0;
		text-align: center;
		top: 0;
		width: 50px;
		z-index: 9999;

		a {
			background: none;
			border: none;
			color: white;
			cursor: pointer;
			font-size: 48px;
			display: block;
			width: 100%;
			height: 100%;
			text-decoration: none;
			position: relative;
			top: -5px;
		}
	}

	.wrapper {
		display: flex;
		justify-content: center;
		height: 100%;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9950;

		@media ($medium) {
			align-items: center;
		}
	}

	h2 {
		font-family: var(--strangeTales);
		text-align: center;
		text-transform: uppercase;
		font-size: 48px;
		color: var(--amaranth);
	}

	.fields {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 30px;

		@media ($medium) {
			flex-direction: row;
		}
	}

	label {
		display: block;
		font-family: var(--silverAge);
		text-transform: uppercase;
		color: var(--rhino);
	}

	input[type='text'] {
		border: 4px solid #aec9d4;
		font-family: var(--body);
		font-size: 1.25rem;
		height: 55px;
		outline: none;
		padding: 0 20px;
		width: 300px;
	}
</style>
