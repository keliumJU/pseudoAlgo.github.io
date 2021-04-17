<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:top>
      <v-toolbar class="cht1" flat>
        <v-toolbar-title>{{nameTable}}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template>
          <Exceloper :numsAle="desserts" :nameFile="namefile" />
        </template>
      </v-toolbar>
    </template>
    <template v-slot:[`item.num`]="{ item }">
      <v-chip :color="getColor(item.num)" dark>
        {{ item.num }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import Exceloper from "@/components/import-export-excel/exceloper.vue";

export default {
  props: {
    desserts: {
      type: Array,
      default: () => []
    },
    namefile: {
      type: String,
      default: "numerosPseudoAlgo"
    },
    headers: {
      type: Array,
      default: () => []
    },
    nameTable:{
      type: String,
      default: "numerosPseudoAlgo"
    }
  },

  components: {
    Exceloper
  },

  data() {
    return {};
  },
  methods: {
    getColor(num) {
      //Hacer que los colores aparezcan de forma aleatoria
      num = Math.random;
      console.log(num);
      return "green";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>