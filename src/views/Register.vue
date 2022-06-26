<template>
    <div>
        <form @submit.prevent="register">
            <h2>Register</h2>
            <input type="name" placeholder="Your Name..." v-model="user.name" />
            <input type="age" placeholder="Your Age..." v-model="user.age" />
            <input type="email" placeholder="Email address..." v-model="user.email" />
            <input type="password" placeholder="password..." v-model="user.password" />
            <button type="submit">Register</button>
            <router-link to="/login">sign in?</router-link>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: {
                age: "",
                name: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((data) => {
                    data.user
                        .updateProfile({
                            age: this.user.age,
                            displayName: this.user.name,
                        })
                        .then(() => {
                            this.$router.push("/login");
                        });
                })
                .catch((err) => {
                    this.error = err.message;
                });
        },
    },
};
</script>
