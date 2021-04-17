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
      <v-row>
      <v-col>
      <v-card class="mx-auto mt-10" max-width="600">
        <v-card-title
          >Ingresa los valores para el algoritmo<br />
          Cuadrados Medios</v-card-title
        >
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="semilla"
              label="Semilla"
              :rules="sRul"
              error-count="2"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn v-on:click="generateNums" color="primary">
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
            namefile="CuadMidAlgo"
            nameTable="Cuadrados Medios Algoritmo"
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
  name: "CuadradosMediosAlgo",
  components:{
    Propiedades,
    TablaDim
  },
  props: {
    msg: String
  },
  data() {
    return {
      sRul: [
        v => !!v || "Semilla es requerida",
        v => (v && v.length >= 3) || "El numero debe tener minimo 3 caracteres",
        v => /^\d+$/.test(v) || "Debe ser un numero entero"
      ],
      semilla: 0,
      headers: [
        {
          text: "N~",
          value: "Xn",
          aling: "start"
        },
        {
          value: "formula",
          text: "X(n-1)^2"
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
    generateNums: function() {
      this.items[0].subSemilla = this.semilla;
      for (let i = 1; i < 12; i++) {
        this.items[i].Xn = i;
        this.items[i].formula = Math.pow(this.items[i - 1].subSemilla, 2);
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
