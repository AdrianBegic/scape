<template>
    <div>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <input
      type="email"
      placeholder="Email address..."
      v-model="user.email"
    />
    <input
      type="password"
      placeholder="password..."
      v-model="user.password"
    />
    <button type="submit">Register</button>
  </form>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  data() { 
  return { 
     user: {
        name: '',
        email: '',
        password: ''
      }
  }; 
},
  methods: {
  register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
           .then(() => {
        alert('Successfully registered! Please login.');
        this.$router.push('/Dashboard');
           })
      .catch(error => {
        alert(error.message);
      });
  },
},
};
</script>