<template>
  <div> Tengo {{ Edad }} años de edad <br>
    <button @click="Edad--">Restar</button> <button @click="Edad++">Sumar</button></div>
</template>

<script>
export default {
    data() {
        return {
            Edad:19
        }
    }
}
</script>

<style>

</style>