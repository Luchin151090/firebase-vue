<template>
  <div id="fondo">
    <h1>Calculadora Online</h1>
        <h2>Sign Up</h2>
    <form id="form">
      <input id="correo" type="email" placeholder="email" v-model="email" />
      <input
        id="pass"
        type="password"
        placeholder="contraseña"
        v-model="contraseña"
      />
      <button @click="signup" type="button">Sign Up</button>
    </form>
    
    <p>¿ Ya tienes una cuenta ?</p>
    <router-link to="/">Login in</router-link>
   
  </div>
</template>

<script>
//import firebase from 'firebase';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      email: "",
      contraseña: "",
      alerta: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.contraseña)
        .then((user) => {
          document.getElementById("form").reset();
          alert('Listo!');
         
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
#fondo{
    background-color:#ABEBC6;
}
#alerta {
  font-family: Arial, Helvetica, sans-serif;
  color: green;
  font-size: large;
  size: 200px;
}
</style>
