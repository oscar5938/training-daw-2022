<template>
  <section>
    <button @click="add()">Add</button>
    <button @click="remove()">Remove</button>
    <br />
    <br />
    <div v-for="items in numbers" :key="items">
      <li>{{items}}</li>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      numbers: []
    };
  },
  methods: {
    add() {
      this.numbers.push(Math.floor(Math.random() * 100));
    },
    remove() {
      if (this.numbers.length > 0) {
        this.numbers.shift();
      }
    },
  },
};
</script>

<style>
</style>