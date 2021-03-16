<template>
<div>
<h1>{{ msg }}</h1>
<v-app>
<v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Ingresa los valores para el algoritmo<br> Congruencial Multiplicativo</v-card-title>
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
  name: "CongruencialMultiplicativoAlgo",
  props: {
    msg: String
  },
  data(){
    return {
      X0Rules:[
        (v)=>!!v||"X0 es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
        (v)=>v&&v%2==1||"X0 debe ser impar"
      ],
      ARules:[
        (v)=>!!v||"A es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
        (v)=>this.despejarK(v),
      ],
      MRules:[        
        (v) => !!v || "M Es requerido",
        (v) => this.despejarM(v),
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      valX0: 0,
      valA:0,
      valM:0,
      fields:[
        {            
          key:'Xn',
          label:'N~'
        },
        {
          key:'formula',
          label: '(aXn-1)mod(m)'
        },
        {            
          key:'num',
          label:'Numero Aleatorio'
        }
      ],
      items: [
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
      ],
    }
  },
  methods: {
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
    despejarK: function(val){
      //DespejamosK de la formula a=1+4K
      //a-1=4.k => (a-1)/4=k
       let k=(val-3)/8
       let k2=(val-5)/8
       if(k%1==0||k2%1==0){
         return true
       }
      return `"${val}" no se cumple en a=3+8k o a=5+8k` 
    },
    linealAlgorithm: function(){
        this.valX0=parseInt(this.valX0)
        this.valA=parseInt(this.valA)
        this.valM=parseInt(this.valM)
        this.items[0].formula=this.valX0;
        for(let i=1; i<=10; i++){
            this.items[i].Xn=i;
            var formulaVal=(this.valA*this.items[i-1].formula)%this.valM
            this.items[i].formula=formulaVal
            this.items[i].num=this.items[i].formula/(this.valM-1)
        }
    }
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
.data-input{
  margin: auto;
  width: 50%;
  padding: 10px;
}
.child{
  margin: 0 auto;
}

</style>