<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col>
          <h1 class="my-font">{{ msg }}</h1>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row class="justify-center pa-10 properties-head">
        <v-col>
          <v-card class="mx-auto mt-10" max-width="600">
            <v-card-title
              >Ingresa los valores para el algoritmo<br />
              Congruencial Aditivo</v-card-title
            >
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="valX"
                  label="X0"
                  :rules="X0Rules"
                  error-count="2"
                  required
                ></v-text-field>
                <v-btn v-on:click="addXn" color="primary"> Add </v-btn>
                <v-text-field
                  v-model="valM"
                  label="M"
                  :rules="MRules"
                  error-count="2"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn v-on:click="congruencialAditivo" color="primary">
                Go
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <Propiedades :itemsp="items" />
        </v-col>
        <v-col>
          <Propiedades :itemsp="items" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="rounded-md pa-4 ma-2">
          <TablaDim
            :desserts="items"
            :headers="headers"
            namefile="CongruAddAlgo"
            nameTable="Congruencial Aditivo Algoritmo"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Propiedades from "@/components/prueba-estadistica/Propiedades.vue";
import TablaDim from "@/components/tabla-dinamica/TablaDim.vue";
export default {
  name: "CongruencialAditivoAlgo",
  components:{
    Propiedades,
    TablaDim
  },
  props: {
    msg: String,
  },
  data() {
    return {
      X0Rules: [
        (v) => !!v || "Xn es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      MRules: [
        (v) => !!v || "M es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      iter: 0,
      valX: 0,
      valM: 0,
      headers: [
        {
          value: "Xn",
          align:"start",
          text: "N~",
        },
        {
          value: "formula",
          text: "(Xn-1+Xn-4) mod m",
        },
        {
          value: "num",
          text: "Numero Aleatorio",
        },
      ],
      items: [
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
        { Xn: 0, formula: 0, num: 0 },
      ],
    };
  },
  methods: {
    addXn: function () {
      this.items[this.iter].formula = parseInt(this.valX);
      this.items[this.iter].Xn = this.iter + 1;
      this.items.push({ Xn: 0, formula: 0, num: 0 });
      this.iter++;
    },
    congruencialAditivo: function () {
      for (let i = this.iter; i < this.items.length; i++) {
        this.items[i].Xn = i + 1;
        var formulaVal =
          (this.items[i - 1].formula + this.items[i - this.iter].formula) %
          this.valM;
        this.items[i].formula = formulaVal;
        this.items[i].num = this.items[i].formula / (this.valM - 1);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/_fonts_component_algo.scss";
</style>
