<template>
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
      <li>Multiplicador Constante</li>
      <li>Algoritmo Lineal</li>
    </ul>
      </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
