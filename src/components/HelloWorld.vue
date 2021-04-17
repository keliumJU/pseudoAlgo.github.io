<template>
  <div class="hello">
    <b-container>
      <b-jumbotron :header="msg" :lead="intro">
        <h3>Algoritmos para generar numeros pseudoaleatorios</h3>
        <ul>
          <li>Cuadrados Medios</li>
          <li>Productos Medios</li>
          <li>Multiplicador Constante</li>
          <br />
          <li>Algoritmo Lineal</li>
          <li>Congruencial Aditivo</li>
          <li>Congruencial Multiplicativo</li>
        </ul>
        <h3>Propiedades de los numeros pseudoaleatorios</h3>
        <ul>
          <li>Media</li>
          <li>Varianza</li>
        </ul>
        <b-button
          variant="info"
          href="https://es.wikipedia.org/wiki/N%C3%BAmero_pseudoaleatorio#:~:text=Las%20secuencias%20de%20n%C3%BAmeros%20pseudo,producen%20siempre%20el%20mismo%20resultado."
          target="_blank"
          >Mas informacion</b-button
        >
      </b-jumbotron>
    </b-container>
  </div>
  <!--
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      PseudoAlgo es una pagina web que simula algoritmos encargados de generar numeros pseudoaleatorios,<br>
      basados en unas simples formulas matematicas.
    </p>
    <h3>Agoritmos para generar numeros pseudoaleatorios</h3>
    <ul>
      <li>
        Cuadrados Medios 
      </li>
      <li>
        Productos Medios 
      </li>
      <li>Multiplicador Constante</li><br>
      <li>Algoritmo Lineal</li>
      <li>Congruencial Aditivo</li>
      <li>Congruencial Multiplicativo</li>
    </ul>
      </div>
      -->
</template>

<script>
import { BContainer, BJumbotron, BButton } from "bootstrap-vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      intro:
        "PseudoAlgo es una pagina web que simula algoritmos encargados de generar numeros pseudoaleatorios " +
        "basados en unas simples formulas matematicas."
    };
  },
  components: {
    BContainer,
    BJumbotron,
    BButton
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
</style>
