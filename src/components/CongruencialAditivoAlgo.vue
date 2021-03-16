<template>
<div>
<h1>{{ msg }}</h1>
<v-app>
<v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Ingresa los valores para el algoritmo<br> Congruencial Aditivo</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="valX"
                    label="X0"
                    :rules="X0Rules"
                    error-count="2"
                    required
                ></v-text-field>
              <v-btn v-on:click="addXn" color="primary">
                Add 
            </v-btn>
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
    <br>
    <b-table striped hover :fields="fields" :items="items" ></b-table>
    </v-app>
    </div>
</template>

<script>
export default {
  name: "CongruencialAditivoAlgo",
  props: {
    msg: String
  },
  data(){
    return {
       X0Rules: [
        (v) => !!v || "Xn es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      MRules:[
        (v)=>!!v||"M es requerido",
        (v) => /^\d+$/.test(v) || "Debe ser un numero entero",
      ],
      iter:0,
      valX: 0,
      valM:0,
      fields:[
        {            
          key:'Xn',
          label:'N~'
        },
        {
          key:'formula',
          label: '(Xn-1+Xn-4) mod m'
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
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
        {Xn:0,formula:0,num:0},
      ],
    }
  },
  methods: {
    addXn: function() {
      this.items[this.iter].formula = parseInt(this.valX);
      this.items[this.iter].Xn = this.iter + 1;
      this.items.push({ Xn: 0, formula: 0, num: 0 });
      this.iter++;
    },
    congruencialAditivo: function() {
      for (let i = this.iter; i < this.items.length; i++) {
        this.items[i].Xn = i + 1;
        var formulaVal =
          (this.items[i - 1].formula + this.items[i - this.iter].formula) %
          this.valM;
        this.items[i].formula = formulaVal;
        this.items[i].num = this.items[i].formula / (this.valM - 1);
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