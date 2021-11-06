<script>
	import Snow from '$components/Snow/Snow.svelte';
	import Header from '$components/Header/Header.svelte';
	import Faqs from '$components/Faqs/Faqs.svelte';
	import BundleTier from '$components/Tiers/BundleTier.svelte';
	import SolutionTier from '$components/Tiers/SolutionTier.svelte';
	import FreeTier from '$components/Tiers/FreeTier.svelte';
	import HowItWorks from '$components/HowItWorks/HowItWorks.svelte';
	import GetGood from '$components/GetGood.svelte';
	import WhoAreYou from '$components/WhoAreYou/WhoAreYou.svelte';
	import WhoIsItFor from '$components/WhoIsItFor/WhoIsItFor.svelte';
	import Calendar from '$components/Calendar/Calendar.svelte';
	import IllustrationFooter from '$components/Tiers/images/illustration.svg';
	import Footer from '$components/Footer/Footer.svelte';
	import SectionHeader from '$components/SectionHeader/SectionHeader.svelte';
</script>

<Snow />

<Header />

<div class="tiers">
	<FreeTier />
	<SolutionTier />
	<BundleTier />
</div>

<!-- HOW IT WORKS -->
<HowItWorks />

<!-- GET GOOD AT CSS -->
<GetGood />

<div class="who-is-who-are">
	<!-- WHO IS THIS FOR? -->
	<div><WhoIsItFor /></div>

	<!-- WHO ARE YOU? -->
	<div><WhoAreYou /></div>
</div>

<!-- 24 DAYS X 24 CHALLENGES -->
<Calendar />

<!-- FAQS -->
<Faqs />

<!-- TIERS -->
<div class="tier-illustrations">
	<img src={IllustrationFooter} role="presentation" alt="houses" />
</div>
<div class="tiers bottom">
	<h2>Join the Challenge</h2>
	<FreeTier />
	<SolutionTier />
	<BundleTier />
</div>

<!-- FOOTER -->
<Footer />

<style lang="scss">
	@import '../styles/Breakpoints.scss';

	.tier-illustrations {
		overflow-x: hidden;
		width: 100vw;
	}
	.tiers {
		display: flex;
		flex-direction: column;
		gap: 150px;
		justify-content: center;
		margin-bottom: 100px;
		padding: 0 0 30px;
		position: relative;
		z-index: 75;

		/* tiers listed near the footer need additional space on top */
		&.bottom {
			margin-top: 75px;
		}

		/* tiers appear 3 across */
		@media ($tablet) {
			align-items: center;
			flex-direction: row;
			gap: 5px;
			margin: 0 0 45px;
		}

		/* join the challenge */
		> h2 {
			background: var(--rhino);
			color: var(--ceramic);
			font-family: var(--silverAge);
			font-size: 2.1rem;
			font-weight: normal;
			left: 25px;
			padding: 12px 20px;
			position: absolute;
			text-transform: uppercase;
			top: -180px;
			transform: skew(0, -9deg);

			@media ($desktop) {
				font-size: 2.8rem;
				top: -130px;
			}
		}
	}

	.who-is-who-are {
		align-items: center;
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 50px;

		@media ($desktop) {
			flex-direction: row;
			justify-content: center;
		}
	}
</style>
