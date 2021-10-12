<script lang="ts">
  export let dollars: number;
</script>

<div class="money">
<span class="dollar-sign">$</span><span class="dollars">{dollars}</span>
</div>

<style>
  .money {
    align-items: flex-start;
    color: var(--rhino);
    display: flex;
    font-family: var(--strangeTales);
    justify-content: center;
  }

  .dollar-sign {
    font-size: 5rem;
  }

  .dollars {
    font-size: 7.75rem;
  }
</style>