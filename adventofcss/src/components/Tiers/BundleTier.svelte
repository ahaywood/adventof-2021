<script>
  import Dollars from '../Dollars.svelte';
  import Button from '../Button.svelte';
  import "./Bundle.css";
</script>

<div class="tier">
  <div class="content">
    <Dollars dollars={39} />
    <h3>Bundled with<br /> JavaScript Challenges</h3>
    <p>24 Challengs and Solutions for Advent of CSS <strong><em>and</em></strong> Advent of JavaScript</p>
  </div>
  <div class="button">
    <Button label="Awesome!" />
  </div>
</div>

<style lang="scss">
  .tier {
    background: url('./images/bg__bundle.svg') center top no-repeat;
    background-size: 100% auto;
    width: 437px;
    height: 320px;
    padding: 0 35px 45px;
  }
</style>