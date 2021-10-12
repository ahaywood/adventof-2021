<script>
  export let text = '';
  export let size = 'short';
</script>

<div class="header" class:short={size == 'short'} class:long={size == 'long'}>
  <div class="text">{text}</div>
  <div class="shadow">{text}</div>
</div>

<style lang="scss">
  .header {
    align-items: center;
    display: flex;
    font-family: var(--strangeTales);
    font-size: 4.75rem;
    justify-content: center;
    line-height: 1;
    margin-bottom: 25px;
    position: relative;
    text-transform: uppercase;

    &.short {
      --textColor: var(--oracle);
      --textShadow: var(--ceramic);
      background-size: 925px 172px;
      background: url('./images/heading-bg.svg') center top no-repeat;
      height: 172px;
      width: 925px;
    }

    &.long {
      --textColor: var(--ceramic);
      --textShadow: var(--rhino);
      background-size: 1281px 172px;
      background: url('./images/heading--long.svg') center top no-repeat;
      height: 172px;
      width: 1281px;
    }

    .text {
      color: var(--textColor);
      margin-left: -5px;
      margin-top: -5px;
      position: relative;
      z-index: 2;
    }

    .shadow {
      color: var(--textShadow);
      line-height: 1;
      position: absolute;
      z-index: 1;
    }
  }
</style>