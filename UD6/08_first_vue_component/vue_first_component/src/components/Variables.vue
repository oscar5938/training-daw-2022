<template>
  <div id="Div1">
      <h3>Mi nombre es {{ Nombre }} {{ Apellido }}</h3>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Nombre:"Oscar",
            Apellido: `Ruiz Gil`
        }
    }
}
</script>

<style>

</style>