<script>
  import snowflake0 from "./images/snowflake-0.svg";
  import snowflake1 from "./images/snowflake-1.svg";
  import snowflake2 from "./images/snowflake-2.svg";
  import snowflake3 from "./images/snowflake-3.svg";
  import snowflake4 from "./images/snowflake-4.svg";
  import snowflake5 from "./images/snowflake-5.svg";
  import snowflake6 from "./images/snowflake-6.svg";
  import snowflake7 from "./images/snowflake-7.svg";
  import snowflake8 from "./images/snowflake-8.svg";
  import snowflake9 from "./images/snowflake-9.svg";
</script>

<div class="wrapper">
  <div class="snowfall">
    {#each Array(5) as number }
    <div class="snowflake"><span><img src={snowflake0} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake1} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake2} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake3} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake4} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake5} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake6} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake7} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake8} alt="snowflake" role="presentation"></span></div>
    <div class="snowflake"><span><img src={snowflake9} alt="snowflake" role="presentation"></span></div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "sass:math";
  /* Reference: https://www.cssscript.com/css-only-snow-falling-effect/ */
  $count: 50;
  $screenOffset: 100px;
  $fallDuration: 16;
  $windNoise: 30;
  $windSpeed: 10;
  $sizeNoise: 40;
  $rotation: 720;
  $imageSize: 20px;
  $fontSize: 40px;

  .wrapper {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 50;
  }

  .snowfall {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50000000;

    display: block;

    font-size: $fontSize;

    overflow: hidden;
    pointer-events: none;

    .snowflake {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      justify-content: center;

      width: $screenOffset;
      height: $screenOffset;

      span {
        align-self: center;
      }
    }

    @while ($count > 0) {
      $left: random(100);
      $deltaLeft: math.div(random(2 * $windNoise * 10), 10) - $windNoise + $windSpeed;
      $scale: 1 + math.div((math.div(random(2 * $sizeNoise * 10), 10) - $sizeNoise), 100);

      .snowflake:nth-child(#{$count}) {
        animation: animation-snowflake-#{$count} linear infinite;
        animation-duration: $fallDuration + math.div(random($fallDuration * 10), 10) + s;
        animation-delay: math.div(random(2 * $fallDuration * 10), 10) - (2 * $fallDuration) + s;
      }

      @keyframes animation-snowflake-#{$count} {
        0% {
          left: percentage(math.div($left, 100));
          top: calc(0% - #{$screenOffset});
          transform:
            scale($scale)
            /* rotate3d(
              math.div(random(100), 100),
              math.div(random(100), 100),
              math.div(random(100), 100),
              0deg
            ); */
        }
        100% {
          left: percentage(math.div(($left + $deltaLeft), 100));
          top: calc(100% + #{$screenOffset});
          transform:
            scale($scale)
            /* rotate3d(
              math.div(random(100), 100),
              math.div(random(100), 100),
              math.div(random(100), 100),
              (random($rotation) + $rotation) * ((random(2) - 1) * 2 - 1) + deg
            ); */
        }
      }

      $count: $count - 1;
    }
  }
</style>