<script>
  import Dollars from '../Dollars.svelte';
  import Button from '../Button.svelte';
  import "./Bundle.css";
</script>

<div class="tier">
  <div class="content">
    <Dollars dollars={0} />
    <h3>24 Challenges</h3>
    <p>Each challenge includes a <a href="http://figma.com" target="_blank">Figma</a> file and a brief to get you started.</p>
  </div>
  <div class="button">
    <Button label="Sign me up!" />
  </div>
</div>

<style lang="scss">
  .tier {
    background: url('./images/bg__free.svg') center top no-repeat;
    background-size: 100% auto;
    width: 444px;
    height: 303px;
    padding: 0 60px 60px;
  }

</style>