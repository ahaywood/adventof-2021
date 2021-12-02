<slot><!-- optional fallback --></slot>

<svelte:head>
	<title>Advent of CSS</title>
	<link rel="icon" href="/images/icon-192x192.png" />
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" href="/images/icon-192x192.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@selfteachme" />
	<meta name="twitter:creator" content="@selfteachme" />
	<meta property="og:url" content="https://www.adventofcss.com/" />
	<meta property="og:title" content="Advent of CSS" />
	<meta property="og:description" content="24 CSS Challenges for the Season" />
	<meta property="og:image" content="/images/Banner.png" />
	<meta property="og:image:alt" content="Advent of CSS" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:site_name" content="Advent of CSS" />
	<link rel="canonical" href="https://www.adventofcss.com/" />
</svelte:head>

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
		--pastelBlue: #b3c8d3;
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
		width: 100vw;
		overflow-x: hidden;
	}
</style>
