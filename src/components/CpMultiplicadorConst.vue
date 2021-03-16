<template>
<div>
<h1>{{ msg }}</h1>
<v-app>
<v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Ingresa los valores para el algoritmo <br>Multiplicador Constante</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="semilla"
                    label="Semilla"
                    :rules="sRul"
                    error-count="2"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="constante"
                    label="constante"
                    :rules="cRul"
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
    <br>
    <b-table striped hover :fields="fields" :items="items" ></b-table>
    </v-app>
    </div>

</template>

<script>
export default {
  name: "MultiplicadorConstante",
  props: {
    msg: String
  },
  data(){
    return {
       sRul:[
          (v)=>!!v||"Semilla es requerida",
          (v) => (v&&v.length>=3) || 'El numero debe tener minimo 3 caracteres',
          (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
       ],
       cRul:[
          (v)=>!!v||"Constante k es requerida",
          (v) => (v&&v.length>=3) || 'El numero debe tener minimo 3 caracteres',
          (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
       ],
      semilla: 0,
      constante: 0,
      fields:[
        {            
          key:'Xn',
          label:'N~'
        },
        {
          key:'formula',
          label: 'K * Xn-1'
        },
        {
          key:'subSemilla',
          label: 'Sub Semilla'
        },
        {            
          key:'num',
          label:'Numero Aleatorio'
        }
      ],
      items: [
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
        {Xn:0,formula:0,subSemilla:0,num:0},
      ],
    }
  },
  methods: {
    generateNums: function(){
      if(this.semilla.toString().length>=3){
        this.items[0].subSemilla=this.semilla;
        for(let i=1; i<12; i++){
          this.items[i].Xn=i;
          this.items[i].formula=((this.items[i-1].subSemilla)*this.constante);
          var formulaString=String(this.items[i].formula)
          var semillaString=String(this.items[0].subSemilla)
          var tamSemilla=semillaString.length
          var tamFormula=formulaString.length
          var valTrunc=Math.trunc((tamFormula-tamSemilla)/2)
          var extraer=formulaString.substring(valTrunc,valTrunc+tamSemilla)
          this.items[i].subSemilla=parseInt(extraer)
          this.items[i].num=(this.items[i].subSemilla/(Math.pow(10,tamSemilla)))
        }
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