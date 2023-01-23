<template>
  <div @click="doLike">
      <h1>{{title}}</h1>
      <h2>{{author}}</h2>
      <p>{{content}}</p>
  </div>
</template>

<script>
export default {
 props: ['key', 'title', 'author', 'content', 'id'],
 methods: {
     doLike(){
         console.log(`POST / ${this.id} / like`)
     }
 }
}
</script>

<style>

</style>