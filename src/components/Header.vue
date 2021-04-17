<template>
  <b-navbar type="dark" variant="dark" fixed="top" class="pt-3 pb-3">
    <b-navbar-nav>
      <b-navbar-brand to="/">
        <img
          src="../assets/logoalgo.png"
          class="d-inline-block align-top"
          alt="PseudoAlgoLogo"
          width="30"
          height="30"
        />
        PseudoAlgo
      </b-navbar-brand>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Algorithms" right>
        <b-dropdown-item to="/cuadrados-medios">
          cuadrados Medios
        </b-dropdown-item>
        <b-dropdown-item to="/productos-medios">
          Productos Medios
        </b-dropdown-item>
        <b-dropdown-item to="/lineal-algo">
          Lineal Algorthm
        </b-dropdown-item>
        <b-dropdown-item to="/congruencial-aditivo">
          Congruencial Aditivo
        </b-dropdown-item>
        <b-dropdown-item to="/congruencial-multiplicativo">
          Congruencial Multiplicativo
        </b-dropdown-item>
        <b-dropdown-item to="/multiplicador-constante">
          Multiplicador Constante
        </b-dropdown-item>
        <b-dropdown-item to="/congruencial-cuadratico">
          Congruencial Cuadratico
        </b-dropdown-item>
        <b-dropdown-item to="/blum-blumShub">
          Blum Blum y Shub
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item to="/propiedades">Propiedades</b-nav-item>

      <b-nav-item to="/about">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import {
  BDropdownItem,
  BNavbar,
  BNavItem,
  BNavItemDropdown,
  BNavbarNav,
  BNavbarBrand
} from "bootstrap-vue";
export default {
  name: "Header",
  components: {
    BDropdownItem,
    BNavbar,
    BNavItem,
    BNavItemDropdown,
    BNavbarNav,
    BNavbarBrand
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
