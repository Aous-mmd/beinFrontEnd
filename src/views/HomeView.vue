<template>
  <div class="home">
    <div>{{ username }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  mounted() {
    const username = localStorage.getItem('username');
    this.username = username;
  },
  data: () => ({ username: '' }),
  components: {
    HelloWorld
  }
}
</script>
