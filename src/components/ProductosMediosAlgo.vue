<template>
<div>
<h1>{{ msg }}</h1>
<v-app>
<v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Ingresa los valores para el algoritmo<br> Productos Medios</v-card-title>
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
    <br>
    <b-table striped hover :fields="fields" :items="items" ></b-table>
    </v-app>
    </div>
</template>

<script>
export default {
  name: "ProductosMediosAlgo",
  props: {
    msg: String
  },
  data(){
    return {
      rule:[
        (v)=>!!v||`Xn es requerido`,
        (v) => (v&&v.length>=3) || 'El numero debe tener minimo 3 caracteres',
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
        valX0:0,
        valX1:0,
      fields:[
        {            
          key:'Xn',
          label:'N~'
        },
        {
          key:'formula',
          label: 'Xn-2*Xn-1'
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
    pma: function(){
        //this.valX0=parseInt(this.valX0);
        //this.valX1=parseInt(this.valX1);
        this.items[0].Xn=0;
        this.items[1].Xn=1;
        this.items[0].subSemilla=this.valX0;
        this.items[1].subSemilla=this.valX1;
        for(let i=2; i<=11; i++){
          this.items[i].Xn=i;
          var formulaValue=this.items[i-2].subSemilla*this.items[i-1].subSemilla
          this.items[i].formula=formulaValue
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