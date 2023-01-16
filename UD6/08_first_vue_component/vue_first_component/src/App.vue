<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Variables id="Variables"></Variables>
      <Variables2 id="Variables2"></Variables2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Variables from './components/Variables.vue'
import Variables2 from './components/Variables2.vue'


export default {
  name: 'App',
  components: {
    HelloWorld, Variables, Variables2
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

#Variables{background-color: aquamarine;}
#Variables2{background-color: red;}

</style>
