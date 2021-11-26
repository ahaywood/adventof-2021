<script lang="ts">
  import kwesforms from 'kwesforms';
  import { onMount } from 'svelte';

  let yourName = '';
  let creditCard = '';
  let expirationDate = '';
  let cvc = '';

  onMount(() => {
    kwesforms.init();
  });
</script>

<form class="kwes-form" action="https://kwesforms.com/api/foreign/forms/gjEaIw5wdICVEMq4VTy1">
  <div>
    <label for="name">Your Name</label>
    <input type="text" name="name" bind:value={yourName} />
  </div>
  <div class="">
    <label for="creditCard">Credit Card</label>
    <input type="cc-number" name="creditCard" bind:value={creditCard} />
  </div>
  <div>
    <label for="expirationDate">Expiration Date</label>
    <input type="cc-exp" name="expirationDate" bind:value={expirationDate} />
  </div>
  <div>
    <label for="cvc">CVC</label>
    <input type="cc-cvc" name="cvc" bind:value={cvc} />
  </div>
  <input type="hidden" name="amount" value="24" />
  <button type="submit">Submit</button>
</form>
