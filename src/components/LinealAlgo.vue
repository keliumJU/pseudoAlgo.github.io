<template>
<div>
<h1>{{ msg }}</h1>
<v-app>
<v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Ingresa los valores para el<br> algoritmo lineal</v-card-title>
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
                    v-model="valM"
                    label="M"
                    :rules="MRules"
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
                </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn v-on:click="linealAlgorithm" color="primary">
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
  name: "LinealAlgo",
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
        (v) => this.despejarK(v),
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      MRules:[
        (v) => !!v || "M Es requerido",
        (v) => this.despejarM(v),
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      CRules:[
        (v) => !!v || "C Es requerido",
        (v) => this.relativePrime(v),
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      valX0: 0,
      valA: 0,
      valC: 0,
      valM: 0,
      fields: [
        {
          key: "Xn",
          label: "N~",
        },
        {
          key: "formula",
          label: "(aXn+c)mod(m)",
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
    despejarK: function(val){
      //DespejamosK de la formula a=1+4K
      //a-1=4.k => (a-1)/4=k
       let k=(val-1)/4
       if(k%1==0){
         return true
       }
      return `"${val}" no se cumple en a=1+4k` 
    },       
    relativePrime: function(val){
      //validar c si es relativamente primo a m solo para numeros menores a 100
      //Es relativamente primo si solo el numero 1 es su primo en comun
      //val=parseInt(this.valC)
      let factores=[]
      for(let i=1; i<val; i++){
        if(val%i==0){
          factores.push(i);
        }
      }
      for(let i=1; i<this.valM; i++){
        if(this.valM%i==0){
          factores.push(i);
        }
      }

      //si no tienen otro divisor común más que 1 y -1.
      // Equivalentemente son primos entre sí, si y sólo si, su máximo común divisor es igual a 1.
      let counts={}

      for(let i=0; i<factores.length; i++){
        if(counts[factores[i]]){
          counts[factores[i]]+=1;
          if(counts[factores[i]]>1&&factores[i]!=1){
          return `"${val}" no es relativamente primo a "${this.valM}"`;
        }
        }else{
          counts[factores[i]]=1
        }
        
      }
      return true; 
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
   linealAlgorithm: function () {
      this.valX0 = parseInt(this.valX0);
      this.valA = parseInt(this.valA);
      this.valC = parseInt(this.valC);
      this.valM = parseInt(this.valM);
      if(this.valM>10){
        this.fillArray(this.valM) 
      }
      this.items[0].formula = this.valX0;
      for (let i = 1; i <= this.valM; i++) {
        this.items[i].Xn = i;
        var formulaVal = (this.valA * this.items[i - 1].formula + this.valC) % this.valM;
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