<script>
import Twitch from "../icons/Twitch.svelte";
import CodePen from "../icons/CodePen.svelte";
import GitHub from "../icons/GitHub.svelte";
import Instagram from "../icons/Instagram.svelte";
import Twitter from "../icons/Twitter.svelte";
import YouTube from "../icons/YouTube.svelte";
import {Constants} from "../../utils/constants";
</script>

<footer>
  <!-- SOOCIAL MEDIA -->
  <ul class="social-media">
    {#if Constants.TWITCH}
    <li>
      <!-- TWITCH -->
      <a href={Constants.TWITCH} target="_blank">
        <Twitch />
      </a>
    </li>
    {/if}

    {#if Constants.INSTAGRAM}
    <li>
      <!-- INSTAGRAM -->
      <a href={Constants.INSTAGRAM} target="_blank">
        <Instagram />
      </a>
    </li>
    {/if}

    {#if Constants.TWITTER}
    <li>
      <!-- TWITTER -->
      <a href={Constants.TWITTER} target="_blank">
        <Twitter />
      </a>
    </li>
    {/if}

    {#if Constants.YOUTUBE}
    <li>
      <!-- YOUTUBE -->
      <a href={Constants.YOUTUBE} target="_blank"><YouTube /></a>
    </li>
    {/if}

    {#if Constants.CODEPEN}
    <li>
      <!-- CODEPEN -->
      <a href={Constants.CODEPEN} target="_blank">
        <CodePen />
      </a>
    </li>
    {/if}

    <li>
      <!-- GITHUB -->
      <a href="http://github.com/ahaywood" target="_blank">
        <GitHub />
      </a>
    </li>
  </ul>

  <!-- LINKS -->
  <nav>
    <ul>
      <li><a href="/support">Contact / Support</a></li>
      <li><a href="/legal/terms-and-conditions">Terms and Conditions</a></li>
      <li><a href="/legal/disclaimers">Disclaimers</a></li>
      <li><a href="/legal/privacy-policy">Privacy Policy</a></li>
    </ul>
  </nav>

  <p class="copyright">
    Copyright &copy;2021. <a href="http://ahhacreative.com" target="_blank">Ah Ha Creative, LLC.</a>
    All Rights Reserved.
  </p>
</footer>

<style lang="scss">
  footer {
    background: url('./images/bg.svg') center top no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 125px 0 60px;
    position: relative;
    z-index: 999;
  }

  .social-media {
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style-type: none;
    padding: 0;
    margin: 0 0 75px 0;

    a {
      color: var(--malibu);

      &:hover {
        color: var(--silverSand);
      }
    }
  }

  nav {
    margin-bottom: 80px;

    ul {
      display: flex;
      gap: 40px;
      list-style-type: none;
      justify-content: center;
      padding: 0;
      margin: 0;

      li {
        background: url('./images/x.svg') right center no-repeat;
        margin: 0 0 0 -15px;
        padding: 0 50px 0 0;
        font-family: var(--silverAge);
        text-transform: uppercase;

        &:last-child {
          background: none;
          margin-right: 0;
        }
      }

      a {
        color: var(--ceramic);
        text-decoration: none;

        &:hover {
          color: var(--silverSand)
        }
      }
    }
  }

  .copyright {
    color: var(--darkPastelBlue);
    text-align: center;

    a {
      color: var(--darkPastelBlue);

      &:hover {
        color: var(--silverSand);
      }
    }
  }
</style>
