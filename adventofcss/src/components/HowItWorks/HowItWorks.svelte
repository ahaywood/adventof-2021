<script>
  import SectionHeader from "$components/SectionHeader/SectionHeader.svelte";

  // images
  import stepOne from "./images/step-one.svg";
  import stepTwo from "./images/step-two.svg";
  import stepThree from "./images/step-three.svg";
</script>

<div class="grid">
  <div class="wrapper">
    <div class="header">
      <SectionHeader text="How It Works" />
    </div>

    <div class="step">
      <div class="step__image">
        <img src={stepOne} alt="Step One" />
      </div>
      <div>
        <h3>For 24 days, you’will get an email outlining a CSS challenge</h3>
        <p>Each challenge includes:</p>
        <ul>
          <li>A Figma design file (no need for a Figma account)</li>
          <li>A brief on how to get started, with ideas to test yourself, and challenge FAQs.</li>
        </ul>
      </div>
    </div>

    <div class="step">
      <div class="step__image">
        <img src={stepTwo} alt="Step Two" />
      </div>
      <div>
        <h3>Complete the challenge</h3>
        <p>Complete the challenge on your own, or refer to the (paid) tutorial and final coded solution.</p>
      </div>
    </div>

    <div class="step">
      <div class="step__image">
        <img src={stepThree} alt="Step Three" />
      </div>
      <div>
        <h3>Share your success.</h3>
        <p>When you’re finished call you mom! Tweet about it! Post a picture on Instagram. Talk about it on Facebook. Use the hashtag <strong>#adventofcss</strong>.</p>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: var(--grid);
    max-width: var(--pageWidth);
    margin: 0 auto 40px;
    position: relative;
    z-index: 60;
  }

  .wrapper {
    background: var(--ceramic);
    grid-column: 4 / -1;
  }

  .header {
    text-align: center;
  }

  .step {
    align-items: flex-start;
    display: flex;
    margin-bottom: 40px;

    &__image {
      margin-right: 20px;
      text-align: right;
      width: 150px;
    }
  }

  p,
  li {
    font-family: var(--body);
    font-size: 1.25rem;
    line-height: 1.3;
  }
</style>