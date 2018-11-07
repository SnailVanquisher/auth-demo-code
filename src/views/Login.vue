<template>
  <div class="login">
    <h3>Log In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click='login'>Submit</button>
    <p> You don't have an account? You can <router-link to="/signup">create one</router-link></p>
  </div>
</template>

<script>

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>

<style scoped> /* scoped just means it will limit CSS to this component*/
</style>
