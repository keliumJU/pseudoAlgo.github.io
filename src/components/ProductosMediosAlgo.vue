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
      <v-card class="justify-center pa-10 properties-head">
        <v-card-title
          >Ingresa los valores para el algoritmo<br />
          Productos Medios</v-card-title
        >
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="valX0"
              label="X0"
              :rules="rule"
              error-count="3"
              required
            ></v-text-field>
            <v-text-field
              v-model="valX1"
              label="X1"
              :rules="rule"
              error-count="3"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn v-on:click="pma" color="primary">
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
            namefile="ProdMidAlgo"
            nameTable="Productos Medios Algoritmo"
          />
          </v-col>
          </v-row>
          </v-container>
    </v-app>
</template>

<script>
import Propiedades from "@/components/prueba-estadistica/Propiedades.vue";
import TablaDim from "@/components/tabla-dinamica/TablaDim.vue"
export default {
  name: "ProductosMediosAlgo",
  components:{
    Propiedades,
    TablaDim
  },
  props: {
    msg: String
  },
  data() {
    return {
      rule: [
        v => !!v || `Xn es requerido`,
        v => (v && v.length >= 3) || "El numero debe tener minimo 3 caracteres",
        v => /^\d+$/.test(v) || "Debe ser un numero entero"
      ],
      valX0: 0,
      valX1: 0,
      headers: [
        {
          value: "Xn",
          align:"start",
          text: "N~"
        },
        {
          value: "formula",
          text: "Xn-2*Xn-1"
        },
        {
          value: "subSemilla",
          text: "Sub Semilla"
        },
        {
          value: "num",
          text: "Numero Aleatorio"
        }
      ],
      items: [
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 },
        { Xn: 0, formula: 0, subSemilla: 0, num: 0 }
      ]
    };
  },
  methods: {
    pma: function() {
      //this.valX0=parseInt(this.valX0);
      //this.valX1=parseInt(this.valX1);
      this.items[0].Xn = 0;
      this.items[1].Xn = 1;
      this.items[0].subSemilla = this.valX0;
      this.items[1].subSemilla = this.valX1;
      for (let i = 2; i <= 11; i++) {
        this.items[i].Xn = i;
        var formulaValue =
          this.items[i - 2].subSemilla * this.items[i - 1].subSemilla;
        this.items[i].formula = formulaValue;
        var formulaString = String(this.items[i].formula);
        var semillaString = String(this.items[0].subSemilla);
        var tamSemilla = semillaString.length;
        var tamFormula = formulaString.length;
        var valTrunc = Math.trunc((tamFormula - tamSemilla) / 2);
        var extraer = formulaString.substring(valTrunc, valTrunc + tamSemilla);
        this.items[i].subSemilla = parseInt(extraer);
        this.items[i].num = this.items[i].subSemilla / Math.pow(10, tamSemilla);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/scss/_fonts_component_algo.scss';
</style>
