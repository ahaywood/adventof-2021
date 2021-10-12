<script>
  import illustration from "./images/header.svg";
  import of from "./images/of.svg";
  import compressedfm from "./images/compressed-fm.svg";
</script>

<header>
  <img src={illustration} alt="header illustration" role="presentation" class="illustration" />
  <div class="content">
    <h1>
      <span class="advent">Advent</span>
      <div>
        <span class="of"><img src={of} alt="of" width="102" height="161" /></span>
        <span class="css">CSS</span>
      </div>
    </h1>
    <h2>24 CSS Challenges for the Season</h2>
    <h3>Starts December 1, 2021</h3>
    <h4>
      <span>Powered by</span>
      <img src={compressedfm} alt="Compressed.fm" />
    </h4>
  </div>
</header>

<style lang="scss">
  header {
    aspect-ratio: 1440 / 700;
  }

  .content {
    height: 580px;
    width: 645px;
    position: absolute;
    right: 140px;
    top: 80px;
    transform: skewY(-9deg);
  }

  h1 {
    color: var(--amaranth);
    font-family: var(--strangeTales);
    font-size: 10rem;
    line-height: .9;
    text-transform: uppercase;
    font-weight: normal;
    position: relative;
    margin: 0 0 10px 0;
    padding: 0;
    top: 25px;
  }

  .of {
    width: 102px;
    height: 161px;
    display: inline-block;
    position: relative;
    left: 20px;
    top: -30px;
    margin-right: -20px;
  }

  .css {
    position: relative;
    top: -25px;
  }

  h2 {
    font-family: var(--silverAge);
    color: var(--rhino);
    font-size: 2.25rem;
    font-weight: normal;
    padding: 0;
    margin: 0 0 10px;
  }

  h3 {
    background: var(--oracle);
    display: inline-block;
    text-transform: uppercase;
    font-family: var(--silverAge);
    color: var(--ceramic);
    font-size: 2.75rem;
    padding: 10px 25px;
    font-weight: normal;
    margin: 0 0 10px;
  }

  h4 {
    font-family: var(--silverAge);
    text-transform: uppercase;
    color: var(--rhino);
    font-weight: normal;
    font-size: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    justify-content: center;
    margin: 0;
    padding: 0;

    span {
      margin-top: 5px;
    }
  }

  .illustration {
    position: absolute;
    width: 100%
  }
</style>