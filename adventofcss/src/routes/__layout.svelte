<slot><!-- optional fallback --></slot>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  @font-face {
    font-family: 'Silver Age';
    src: url('/fonts/silver-age/silver_age_queens-webfont.woff2') format('woff2'),
      url('/fonts/silver-age/silver_age_queens-webfont.woff') format('woff');
  }

  @font-face {
    font-family: 'Strange Tales';
    src: url('/fonts/strange-tales/strange_tales-webfont.woff2') format('woff2'),
      url('/fonts/strange-tales/strange_tales-webfont.woff') format('woff');
  }

  :global(:root) {
    /* colors */
    --ceramic: #fffefa;
    --amaranth: #e8234d;
    --crimsonGlory: #c0002b; /* darker shade of amaranth */
    --rhino: #2c3964;
    --cloudBurst: #202b4c; /* darkeer shade of rhino */
    --pastelBlue: #B3C8D3;
    --darkPastelBlue: #7e90c9;
    --floralWhite: #fffcf1;
    --atoll: #0e6f73;
    --silverSand: #c3c3c3;
    --malibu: #59bcd4;
    --bostonBlue: #3e8daf;
    --oracle: #006e74;

    /* typography */
    --silverAge: 'Silver Age';
    --strangeTales: 'Strange Tales';
    --body: 'Montserrat';

    /* grid */
    --grid: repeat(12, minmax(0, 1fr));
    --pageWidth: 1235px;
  }

  :global(body) {
    background: var(--ceramic) url('/images/snow.svg') center top repeat;
    margin: 0;
    padding: 0;
  }
</style>
