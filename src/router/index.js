import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/cuadrados-medios",
    name: "cuadradosmedios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackchunkname: "about" */ "../views/CuadradosMedios.vue"
      );
    }
  },
  {
    path: "/lineal-algo",
    name: "lineal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackchunkname: "about" */ "../views/Lineal.vue");
    }
  },
  {
    path: "/multiplicador-constante",
    name: "CuadradosMedios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "about" */ "../views/MultiplicadorConst.vue"
      );
    }
  },
  {
    path: "/productos-medios",
    name: "ProductosMedios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "about" */ "../views/ProductosMedios.vue"
      );
    }
  },
  {
    path: "/congruencial-aditivo",
    name: "CongruencialAditivo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackchunkname: "about" */ "../views/CongruencialAditivo.vue"
      );
    }
  },
  {
    path: "/congruencial-multiplicativo",
    name: "CongruencialMultiplicativo",

    component: function() {
      return import(
        /* webpackchunkname: "about" */ "../views/CongruencialMultiplicativo.vue"
      );
    }
  },
  {
    path: "/congruencial-cuadratico",
    name: "CongruencialCuadratico",
    component: function() {
      return import("../views/CongruencialCuadratico.vue");
    }
  },
  {
    path: "/blum-blumShub",
    name: "BlumBlumYShub",
    component: function() {
      return import("../views/BlumBlumYshub.vue");
    }
  },
  {
    path: "/propiedades",
    name: "propiedadesNa",
    component: function() {
      return import("../views/PropiedadesNa.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
