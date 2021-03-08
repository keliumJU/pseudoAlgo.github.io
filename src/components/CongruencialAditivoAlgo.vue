<template>
<div class="la">
    <h1>{{ msg }}</h1>
   <div class="data-input">
        <div class="child">
          <b-form-group
        label="X1:"
        label-for="X1"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="X1" v-model="valX1"></b-form-input>
       </b-form-group>
          <b-form-group
        label="X2:"
        label-for="X2"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="X2" v-model="valX2"></b-form-input>
         </b-form-group>
    <b-form-group
        label="X3:"
        label-for="X3"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="X3" v-model="valX3"></b-form-input>
         </b-form-group>
    <b-form-group
        label="X4:"
        label-for="X4"
        label-cols-sm="4"
        content-cols-sm="4"
        label-align-sm="right"
      >
        <b-form-input type="text" id="X4" v-model="valX4"></b-form-input>
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
  name: "CongruencialAditivoAlgo",
  props: {
    msg: String
  },
  data(){
    return {
      valX1: 0,
      valX2:0,
      valX3:0,
      valX4:0,
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
    linealAlgorithm: function(){
        this.valX1=parseInt(this.valX1)
        this.valX2=parseInt(this.valX2)
        this.valX3=parseInt(this.valX3)
        this.valX4=parseInt(this.valX4)
        this.valM=parseInt(this.valM)
        this.items[0].Xn=1;
        this.items[1].Xn=2;
        this.items[2].Xn=3;
        this.items[3].Xn=4;
        this.items[0].formula=this.valX1;
        this.items[1].formula=this.valX2;
        this.items[2].formula=this.valX3;
        this.items[3].formula=this.valX4;

        for(let i=4; i<=14; i++){
            this.items[i].Xn=i+1;
            var formulaVal=(this.items[i-1].formula+this.items[i-4].formula)%this.valM
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