import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "./components/LoginVue.vue";
import CalcuVue from "./components/CalcuVue.vue";
import AboutVue from "./components/AboutVue.vue";
import SignUp from "./components/SignUp.vue";
import firebase from "firebase/compat/app";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginVue,
  },
  {
    path: "/calc",
    name: "calculadora",
    component: CalcuVue,
    meta: {
         autentificado: true 
        },
  },
  {
    path: "/about",
    name: "about",
    component: AboutVue,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    let usuario = firebase.auth().currentUser;
    console.log(usuario);
    let autorizacion = to.matched.some(record=>record.meta.autentificado);

    if(autorizacion && !usuario){
        next('/');
    }
    else{
        next();
    }

  });

export default router;
