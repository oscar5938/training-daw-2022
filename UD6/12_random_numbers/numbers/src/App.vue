<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RandomNumbers></RandomNumbers>
  </div>
</template>

<script>
import RandomNumbers from './components/RandomNumbers'

export default {
  name: 'App',
  components: {
    RandomNumbers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
