<template>
  <div id="fondo">
    <h1>Calculadora</h1>
    <div id="display">
      <input type="textfield" v-model="pantalla" />
    </div>

    <div id="teclado">
      <table>
        <tr>
          <td><button @click="q0">0</button></td>
          <td><button @click="q1">1</button></td>
          <td><button @click="q2">2</button></td>
        </tr>
        <tr>
          <td><button @click="q3">3</button></td>
          <td><button @click="q4">4</button></td>
          <td><button @click="q5">5</button></td>
        </tr>
        <tr>
          <td><button @click="q6">6</button></td>
          <td><button @click="q7">7</button></td>
          <td><button @click="q8">8</button></td>
        </tr>
        <tr>
          <td><button @click="q9">9</button></td>
          <td><button @click="suma">+</button></td>
          <td><button @click="resta">-</button></td>
        </tr>
        <tr>
          <td><button @click="multi">x</button></td>
          <td><button @click="division">/</button></td>
          <td><button @click="resetear">C</button></td>
        </tr>
        <tr>
          <td><button @click="igual">=</button></td>
        </tr>
      </table>
    </div>
  
  <div id="salir">
    <button @click="logout">Logout</button>
  </div>
</div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      pantalla: "",
      operando1: 0,
      operando2: 0,
      operador: "",
      resultado: 0,
    };
  },
  methods: {
    q0() {
      this.pantalla = this.pantalla + 0;
    },
    q1() {
      this.pantalla = this.pantalla + 1;
    },
    q2() {
      this.pantalla = this.pantalla + 2;
    },
    q3() {
      this.pantalla = this.pantalla + 3;
    },
    q4() {
      this.pantalla = this.pantalla + 4;
    },
    q5() {
      this.pantalla = this.pantalla + 5;
    },
    q6() {
      this.pantalla = this.pantalla + 6;
    },
    q7() {
      this.pantalla = this.pantalla + 7;
    },
    q8() {
      this.pantalla = this.pantalla + 8;
    },
    q9() {
      this.pantalla = this.pantalla + 9;
    },
    suma() {
      this.operando1 = this.pantalla;
      this.operador = "+";
      this.limpiar();
    },
    resta() {
      this.operando1 = this.pantalla;
      this.operador = "-";
      this.limpiar();
    },
    multi() {
      this.operando1 = this.pantalla;
      this.operador = "x";
      this.limpiar();
    },
    division() {
      this.operando1 = this.pantalla;
      this.operador = "/";
      this.limpiar();
    },
    igual() {
      this.operando2 = this.pantalla;
      this.resolver();
    },
    resolver() {
      switch (this.operador) {
        case "+":
          this.resultado = parseInt(this.operando1) + parseInt(this.operando2);
          this.pantalla = this.resultado;

          break;
        case "-":
          this.resultado = parseInt(this.operando1) - parseInt(this.operando2);
          this.pantalla = this.resultado;
          break;

        case "x":
          this.resultado = parseInt(this.operando1) * parseInt(this.operando2);
          this.pantalla = this.resultado;
          break;

        case "/":
          if (parseInt(this.operando2) == 0) {
            this.pantalla = "ERROR";
          } else {
            this.resultado =
              parseInt(this.operando1) / parseInt(this.operando2);
            this.pantalla = this.resultado;
          }

          break;
      }
    },
    resetear() {
      this.limpiar();
    },
    limpiar() {
      this.pantalla = "";
    },
    logout() {

      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.$router.push('/');
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#teclado {
  position: absolute;
 
  width: 170px;
  height: 150px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button {
  margin-left: 1px;

  width: 50px;
}
#display {
  position: relative;
  margin-top: 10px;
}
#salir {
  margin-top: 160px;
}
#fondo{
  background-color: #F9E79F;
}
</style>
