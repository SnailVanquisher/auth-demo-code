<template>
  <div class="sign-up">
    <h3>Let's create an account!</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click='signUp'>Sign Up</button>
    <p>or go back to <router-link to="/login">login</router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'signUp',
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
