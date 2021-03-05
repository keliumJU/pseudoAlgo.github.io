<template>
<div class="la">
    <h1>{{ msg }}</h1>
    <label for="x0">X0</label>
    <input type="text" v-model="valX0">
    <label for="a">a</label>
    <input type="text" v-model="valA">
    <label for="c">c</label>
    <input type="text" v-model="valC">
    <label for="m">m</label>
    <input type="text" v-model="valM">
    <button v-on:click="linealAlgorithm">go</button>
    <b-table striped hover :fields="fields" :items="items" ></b-table>
</div>
</template>

<script>
export default {
  name: "LinealAlgo",
  props: {
    msg: String
  },
  data(){
    return {
      valX0: 0,
      valA:0,
      valC:0,
      valM:0,
      fields:[
        {            
          key:'Xn',
          label:'N~'
        },
        {
          key:'formula',
          label: '(aXn+c)mod(m)'
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
    linealAlgorithm: function(){
        this.valX0=parseInt(this.valX0)
        this.valA=parseInt(this.valA)
        this.valC=parseInt(this.valC)
        this.valM=parseInt(this.valM)
        this.items[0].formula=this.valX0;
        for(let i=1; i<=10; i++){
            this.items[i].Xn=i;
            var formulaVal=(this.valA*this.items[i-1].formula+this.valC)%this.valM
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
</style>