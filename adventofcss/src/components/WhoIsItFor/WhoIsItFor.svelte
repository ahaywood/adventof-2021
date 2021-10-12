<div class="wrapper">
  <div class="header">
    <h2>Who is it for?</h2>
  </div>
  <div class="content">
    <p>These challenges are perfect for beginner to intermediate developers (or designers) who want to become more comfortable with their CSS styling skills.</p>
    <p><strong><em>Before accepting this challenge, you really should know basic HTML and CSS.</em></strong></p>
    <p>You learn best through implemenation. Once you’ve applied your knowledge to a specific project, learning concepts are solidified.</p>
  </div>
</div>

<style lang="scss">
  .wrapper {
    background: url('./images/bg__who-is-it-for.svg') center top no-repeat;
    position: relative;
    z-index: 75;
    width: 627px;
    height: 532px;
    padding: 0 40px 40px 40px;
    box-sizing: border-box;
  }

  .header {
    background: url('./images/heading__who-is-it-for.svg') center top no-repeat;
    width: 636px;
    display: flex;
    height: 239px;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -90px;
    left: -50px;
    margin-bottom: -30px;

    h2 {
      color: var(--ceramic);
      font-family: var(--strangeTales);
      font-size: 4.25rem;
      font-weight: normal;
      text-transform: uppercase;
      transform: rotate(2deg);

    }
  }

  p {
    font-family: var(--body);
    font-size: 1.25rem;;
    line-height: 2.125rem;
    margin-bottom: 30px;
  }
</style>

