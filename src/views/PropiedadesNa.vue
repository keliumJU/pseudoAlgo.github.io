<template>
<div>
  <v-app class="back-degree color-font">
    <v-container>
      <v-row>
        <v-col>
          <h1>Importar Numeros Pseudoaleatorios</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>Puedes generar los numeros pseudoaleatorios con cualquiera de los algoritmos disponibles en la pagina,
            luego exportarlos para importarlos por este medio y realizar las pruebas estadisticas. Tambien puedes 
            generarlos desde excel con la siguiente formula: <strong>=aleatorio.entre(0,1000)/1000</strong> y agregarle
            como encabezado la palabra <strong>num</strong>
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="validatedCustomFile"
              required
              accept=".xls,.xlsx"
              @change="readExcel"
            />
            <label class="custom-file-label" for="validatedCustomFile"
              >Importar Excel</label
            >
            <div class="invalid-feedback">
              Example invalid custom file feedback
            </div>
          </div>
        </v-col>
        <v-col> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Propiedades :itemsp="items" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</div>
</template>

<script>
import XLSX from "xlsx";
import Propiedades from "@/components/prueba-estadistica/Propiedades.vue";

export default {
  name: "propiedadesNa",
  components: {
    Propiedades,
  },
  data() {
    return {
      items: [],
    };
  },

  methods: {
    readExcel(e) {
      const files = e.target.files;
      const fileReader = new FileReader(); // construction function that can read the file content
      fileReader.onload = (ev) => {
        const data = ev.target.result;
        const workbook = XLSX.read(data, {
          type: "binary", // binary
        });
        const wsname = workbook.SheetNames[0]; //take the first sheet
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //Get the data in this table
        ws.forEach((value) => {
          this.items.push(value);
          console.log(value); // data for each line
        });
      };
      fileReader.readAsBinaryString(files[0]); // read file, trigger onload
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '@/scss/_component_layout.scss';
  .color-font{
      font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
  }
</style>