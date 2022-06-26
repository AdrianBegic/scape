<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  name: "Login",
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/Dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
form {
  display: inline-grid;
}

input {
  margin: 10px;
  font-size: 2em;
}

button {
  cursor: pointer;
  font-size: 2em;
}

h2 {
  font-size: 3em;
}

.main {
  position: relative;
  padding-top: 10vh;
}
</style>
