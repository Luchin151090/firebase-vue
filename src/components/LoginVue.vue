<template>
<main id="fondo">
    <div>
        
        <h1>Calculadora Online</h1>
        <h2>Login</h2>
          
          <input type="email" placeholder="email" v-model="email" />
          <input type="password" placeholder="contraseña" v-model="password" />
          <button @click="signin" type="submit">Sign in</button>
          
        <p>
          ¿ Todavía no tienes una cuenta ?</p><router-link to="/signup"
            >Sign Up</router-link
          >
        
      </div>
</main>

</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signin() {
      console.log("sign in");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
     
            this.$router.push('/calc');
          
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    },
  },
};
</script>

<style scoped>
#fondo{
    background-color:#D2B4DE;
}
#s {
  color: yellowgreen;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
