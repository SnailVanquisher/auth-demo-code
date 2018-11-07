<template>
  <div class="hello">
    Welcome logged in user.
    <button v-on:click="logout">Sign Out</button>

  </div>
</template>

<script>

import firebase from 'firebase';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'hello',
  components: {}
}
</script>

<style scoped>
#cat-logo {
  max-width: 300px;
}
</style>
