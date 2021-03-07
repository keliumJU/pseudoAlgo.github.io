<template>
<div class="cm">
    <h1>{{ msg }}</h1>
   <div class="data-input">
        <div class="child">
          <b-form-group
        label="X0:"
        label-for="semilla"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="X0" v-model="valX0"></b-form-input>
       </b-form-group>
          <b-form-group
        label="X1:"
        label-for="X1"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="X1" v-model="valX1"></b-form-input>
         </b-form-group>
          <b-button variant="primary" size="lg" v-on:click="pma">Go!</b-button>
         </div>
      </div>
    <b-table striped hover :fields="fields" :items="items" ></b-table>
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
        this.valX0=parseInt(this.valX0);
        this.valX1=parseInt(this.valX1);
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
.data-input{
  margin: auto;
  width: 50%;
  padding: 10px;
}
.child{
  margin: 0 auto;
}
</style>