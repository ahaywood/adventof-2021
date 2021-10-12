<script>
  import { onMount } from "svelte";
  import SectionHeader from "../SectionHeader/SectionHeader.svelte";
  import Faq from "./Faq.svelte";
  import { env } from "$utils/constants";

  let data = [];

  // get data
  onMount( async () => {
    const url = `${env.SITE_URL}/faqs/faqs.json`;
    const response = await fetch(url);
    data = await response.json();
  })
</script>

<div class="grid">
  <div class="heading">
    <SectionHeader text="Frequently Asked Questions" size="long" />
  </div>

  {#if data}
  <ul class="faqs">
    {#each data as faq}
      <Faq faq={faq} />
    {/each}
  </ul>
  {/if}
</div>

<style lang="scss">
  .grid {
    background: var(--ceramic);
    display: grid;
    grid-template-columns: var(--grid);
    max-width: var(--pageWidth);
    margin: 0 auto;
    position: relative;
    z-index: 60;  /* position above the falling snow  */
  }

  .heading {
    grid-column: 1 / -1;;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    grid-column: 2 / -2;;
  }
</style>

