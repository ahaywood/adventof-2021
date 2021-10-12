<script>
  import SectionHeader from "$components/SectionHeader/SectionHeader.svelte";
</script>

<div class="grid">
  <div class="wrapper">
    <SectionHeader text="Get Good at CSS" />
    <p>
      Learn CSS by doing, through real world projects and components.
    </p>
  </div>
</div>

<style>
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
    grid-column: 4 / -1;
  }

  p {
    font-family: var(--body);
    font-size: 1.25rem;
    line-height: 1.3;
    padding: 0px 60px 60px;
  }
</style>