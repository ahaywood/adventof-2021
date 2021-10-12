<script>
  import hello from "./images/hello.svg";
  import avatar from "./images/avatar.jpg";
  import avatar2x from "./images/avatar@2x.jpg";
</script>

<div class="wrapper">
  <div class="heading">
    <h2>Who Are You?</h2>
  </div>
  <div class="bottom">
    <div class="avatar">
      <img src={avatar} alt="Amy Dutton" srcset="{avatar} 1x, {avatar2x} 2x" class="profile-pic" />
    </div>
    <div class="content">
      <img src={hello} alt="Hello" class="hello" /> My name is <a href="http://twitter.com/selfteachme" title="SelfTeach.me">Amy Dutton</a>.
      I’m the Creative Director at <a href="http://codingzeal.com" target="_blank">ZEAL</a>. I co-host a podcast calld
      <a href="http://compressed.fm" target="_blank">Compressed.fm</a> and teach developers how to design and develop at <a href="http://selfteach.me" title="SelfTeach.me">SelfTeach.me</a>.
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    background: url('./images/bg__who-are-you.svg') center 130px no-repeat;
    width: 721px;
    height: 530px;
    margin-bottom: 100px;
    display: block;
    position: relative;
    z-index: 70;
  }

  .heading {
    background: url('./images/heading__who-are-you.svg') top center no-repeat;
    text-align: center;

    h2 {
      align-items: center;
      color: var(--ceramic);
      display: flex;
      font-family: var(--strangeTales);
      font-size: 4.25rem;
      font-weight: normal;
      height: 227px;
      justify-content: center;
      line-height: 1;
      margin: 0 auto;
      position: relative;
      text-transform: uppercase;
      top: -7px;
      transform: rotate(2deg);
      width: 721px;
    }
  }

  .bottom {
    display: flex;
    gap: 30px;
    padding-right: 60px;
  }

  .content {
    font-family: var(--body);
    font-size: 1.25rem;;
    line-height: 2.125rem;
    text-align: left;
    margin-top: 35px;
    text-indent: -20px;
  }

  .avatar {
    position: relative;
    display: inline-block;
    top: -30px;

    &:before {
      content: '';
      background: url('./images/holly-leaves--left.svg') left bottom no-repeat;
      display: block;
      width: 117px;
      height: 127px;
      position: absolute;
      left: -25px;
      bottom: -45px;
    }

    &:after {
      background: url('./images/holly-leaves--right.svg') left bottom no-repeat;
      bottom: -25px;
      content: '';
      display: block;
      height: 109px;
      position: absolute;
      right: -24px;
      width: 118px;
    }

    .profile-pic {
      border-radius: 50%;
    }


  }
</style>