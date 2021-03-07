<template>
<div class="la">
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
        label="a:"
        label-for="a"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="a" v-model="valA"></b-form-input>
         </b-form-group>
    <b-form-group
        label="c:"
        label-for="c"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="c" v-model="valC"></b-form-input>
         </b-form-group>
    <b-form-group
        label="m:"
        label-for="m"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="m" v-model="valM"></b-form-input>
         </b-form-group>
          <b-button variant="primary" size="lg" v-on:click="linealAlgorithm">Go!</b-button>
         </div>
      </div>
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
.data-input{
  margin: auto;
  width: 50%;
  padding: 10px;
}
.child{
  margin: 0 auto;
}

</style>