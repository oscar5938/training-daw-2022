<template>
  <div id="app">
    Nombre: <input v-model="nombre">
    Apellido: <input v-model="surname" />
    Consentimiento: <input type="checkbox" v-model="check">
    <button v-bind:disabled="!check" @click="print(nombre, surname)"> Boton</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      nombre: 'texto',
      surname: 'value',
      check: false
    }
  },
  methods: {
    print(a, b) {
      console.log(`${a} ${b}`)
    }
  }
}
</script>