<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="content">
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :author="post.author"
        :content="post.content">
      </PostComponent>
    </div>
  </div>
</template>

<script>
import PostComponent from "./components/PostComponent.vue"

export default {
  name: 'App',
  components: {
    PostComponent
  },
  data() {
    return {
      posts: [
        { id: 0, author: 'John Foo', title: 'Basic JS', content: 'Possimus est voluptas maiores. Repudiandae odio ut ipsum et. Quam qui quibusdam expedita sed voluptatibus nihil voluptatem. Esse ea et officia exercitationem rem consequatur tempore illo aut. Id amet maiores magni repudiandae. Dolorum perspiciatis dolores aperiam ullam aut adipisci.' },
        { id: 1, author: 'Admin', title: 'Advanced JS', content: 'Illum fugit sint ut qui et voluptates voluptas vel aut. Facere soluta delectus.' },
        { id: 2, title: 'Why JS?', content: 'Accusamus eligendi quisquam quis quibusdam qui. Pariatur placeat voluptatem ea.' },
      ]
    }
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

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
