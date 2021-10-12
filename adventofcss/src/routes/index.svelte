<script>
  import Snow from "$components/Snow/Snow.svelte";
  import Header from "$components/Header/Header.svelte";
  import Faqs from "$components/Faqs/Faqs.svelte";
  import BundleTier from '$components/Tiers/BundleTier.svelte';
  import SolutionTier from '$components/Tiers/SolutionTier.svelte';
  import FreeTier from '$components/Tiers/FreeTier.svelte';
  import HowItWorks from "$components/HowItWorks/HowItWorks.svelte";
  import GetGood from "$components/GetGood.svelte";
  import WhoAreYou from "$components/WhoAreYou/WhoAreYou.svelte";
  import WhoIsItFor from "$components/WhoIsItFor/WhoIsItFor.svelte";
  import Calendar from '$components/Calendar/Calendar.svelte';
  import IllustrationFooter from "$components/Tiers/images/illustration.svg"
  import Footer from '$components/Footer/Footer.svelte';
  import SectionHeader from "$components/SectionHeader/SectionHeader.svelte";
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
<img src={IllustrationFooter} role="presentation" alt="houses" />
<div class="tiers">
  <h2>Join the Challenge</h2>
  <FreeTier />
  <SolutionTier />
  <BundleTier />
</div>

<!-- FOOTER -->
<Footer />


<style lang="scss">
  .tiers {
    display: flex;
    align-items: flex-end;
    padding: 0 0 30px;
    margin: 0 0 45px;
    position: relative;
    justify-content: center;
    z-index: 75;

    > h2 {
      color: var(--ceramic);
      font-family: var(--silverAge);
      text-transform: uppercase;
      font-size: 2.8rem;
      font-weight: normal;
      background: var(--rhino);
      padding: 12px 20px;
      position: absolute;
      transform: skew(0, -9deg);
      top: -110px;
      left: 25px;
    }
  }

  .who-is-who-are {
    display: flex;
    position: relative;
    justify-content: center;
    gap: 50px;
  }
</style>