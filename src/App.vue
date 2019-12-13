<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Menu from './components/Menu';

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Founders Grotesk', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ECEBE6;
  height: 100vh;
}

.slide-enter-active {
    animation: slide-in 150ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 150ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-10px);
      opacity: 0;
    }
  }

  .main-content {
    max-width: 960px;
    margin: auto;
    padding-top: 80px;
  }

  .small-link {
    color: #49494A;
    font-family: 'Founders Grotesk Mono', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
  }

  .small-link:hover {
    text-decoration: underline;
  }
</style>
