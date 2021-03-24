<template>
<div>
<h1>{{ msg }}</h1>
<v-app>
<v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Ingresa los valores para el<br> algoritmo congruencial cuadratico</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="valX0"
                    label="X0"
                    :rules="X0Rules"
                    error-count="2"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="valA"
                    label="A"
                    :rules="ARules"
                    error-count="3"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="valB"
                    label="B"
                    :rules="BRules"
                    error-count="3"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="valC"
                    label="C"
                    :rules="CRules"
                    error-count="3"
                    required
                ></v-text-field>
                 <v-text-field
                    v-model="valM"
                    label="M"
                    :rules="MRules"
                    error-count="3"
                    required
                ></v-text-field>
                </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn v-on:click="congruCuadlAlgo" color="primary">
                Go 
            </v-btn>
        </v-card-actions>
    </v-card>
    <br>
    <b-table striped hover :fields="fields" :items="items" ></b-table>
    </v-app>
    </div>
</template>

<script>

export default {
  name: "CongruencialCuadraticoAlgo",
  props: {
    msg: String,
  },
  data() {
    return {
      X0Rules: [
        (v) => !!v || "X0 Es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      ARules: [
        (v) => !!v || "A Es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
        (v) => v&&v%2==0||"Debe ser un numero par"
      ],
     BRules: [
        (v) => !!v || "B Es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
        (v) => this.probarB(v) 
      ],
      MRules:[

        (v) => !!v || "M Es requerido",
        (v) => this.despejarM(v),
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      CRules:[
        (v) => !!v || "C Es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
        (v) => v&&v%2==1||"Debe ser un numero impar"  
      ],
      valX0: 0,
      valA: 0,
      valB: 0,
      valC: 0,
      valM: 0,
      fields: [
        {
          key: "Xn",
          label: "N~",
        },
        {
          key: "formula",
          label: "(aXn-1^2+bXn-1+c)mod(m)",
        },
        {
          key: "num",
          label: "Numero Aleatorio",
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
      ],
    };
  },
  methods: {
    probarB: function(val){
        var oper=(val-1)%4;
        if(oper==2){
            return true;
        }else{
            return `${val} no cumple con la formula (b-1)mod4=2`
        }
    },
    despejarM: function(val){
      val=parseInt(this.valM)
      let logVal=Math.log2(val)
       if(logVal%1==0){
          let compareLogPow=Math.pow(2,logVal)
          if(compareLogPow==val){
            return true;
          }
       }
      return `"${val}" no se cumple en m=2^g`
    },
   fillArray: function(m){
     for(let i=0; i<m-10; i++){
       this.items.push({Xn:0, formula:0, num:0})
     }
   },
   congruCuadlAlgo: function () {
      this.valX0 = parseInt(this.valX0);
      this.valA = parseInt(this.valA);
      this.valB = parseInt(this.valB);
      this.valC = parseInt(this.valC);
      this.valM = parseInt(this.valM);
      if(this.valM>10){
        this.fillArray(this.valM) 
      }
      this.items[0].formula = this.valX0;
      for (let i = 1; i <= this.valM; i++) {
        this.items[i].Xn = i;
        var formulaVal = (this.valA*Math.pow(this.items[i-1].formula,2)+this.valB*this.items[i-1].formula+this.valC)%this.valM;
        this.items[i].formula = formulaVal;
        this.items[i].num = this.items[i].formula / (this.valM - 1);
      }
    },
  },
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