<script>
  import CardFlip from "./CardFlip.svelte";
  import day1 from "./images/day-1.svg";
  import day2 from "./images/day-2.svg";
  import day3 from "./images/day-3.svg";
  import day4 from "./images/day-4.svg";
  import day5 from "./images/day-5.svg";
  import day6 from "./images/day-6.svg";
  import day7 from "./images/day-7.svg";
  import day8 from "./images/day-8.svg";
  import day9 from "./images/day-9.svg";
  import day1011 from "./images/day-10-11.svg";
  import day12 from "./images/day-12.svg";
  import day1317 from "./images/day-13-17.svg";
  import day14 from "./images/day-14.svg";
  import day15 from "./images/day-15.svg";
  import day16 from "./images/day-16.svg";
  import day18 from "./images/day-18.svg";
  import day19 from "./images/day-19.svg";
  import day20 from "./images/day-20.svg";
  import day21 from "./images/day-21.svg";
  import day22 from "./images/day-22.svg";
  import day2324 from "./images/day-23-24.svg";
</script>

<div class="calendar">
  <div><img src={day1} alt="Day 1" /></div>
  <div><img src={day2} alt="Day 2" /></div>
  <div><img src={day3} alt="Day 3" /></div>
  <div><img src={day4} alt="Day 4" /></div>
  <div><img src={day5} alt="Day 5" /></div>
  <div><img src={day6} alt="Day 6" /></div>
  <div><img src={day7} alt="Day 7" /></div>
  <div><img src={day8} alt="Day 8" /></div>
  <div><img src={day9} alt="Day 9" /></div>
  <div class="double-wide"><img src={day1011} alt="Day 10 and 11" /></div>
  <div><img src={day12} alt="Day 12" /></div>
  <div class="double-tall"><img src={day1317} alt="Day 13 & 17" /></div>
  <div><img src={day14} alt="Day 14" /></div>
  <div><img src={day15} alt="Day 15" /></div>
  <div><img src={day16} alt="Day 16" /></div>
  <div><img src={day18} alt="Day 18" /></div>
  <div><img src={day19} alt="Day 19" /></div>
  <div class="double-tall"><img src={day2324} alt="Day 23 & 24" /></div>
  <div><img src={day20} alt="Day 20" /></div>
  <div><img src={day21} alt="Day 21" /></div>
  <div><img src={day22} alt="Day 22" /></div>
  <!-- <CardFlip /> -->
</div>

<style lang="scss">
  .calendar {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: var(--pageWidth);
    margin: 0 auto 40px;
  }

  .double-wide {
    grid-column: span 2;
  }

  .double-tall {
    grid-row: span 2;
  }
</style>