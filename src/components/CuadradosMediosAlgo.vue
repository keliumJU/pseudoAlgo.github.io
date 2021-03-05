<template>
<div class="cm">
    <h1>{{ msg }}</h1>
    <label for="semilla">Semilla</label>
    <input type="text" id="semilla" v-model="semilla" v-on:keyup="generateNums">
    <b-table striped hover :fields="fields" :items="items" ></b-table>
</div>
</template>

<script>
export default {
  name: "CuadradosMediosAlgo",
  props: {
    msg: String
  },
  data(){
    return {
      semilla: 0,
      fields:[
        {            
          key:'Xn',
          label:'N~'
        },
        {
          key:'formula',
          label: 'X(n-1)^2'
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
          this.items[i].formula=Math.pow(this.items[i-1].subSemilla,2);
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
</style>