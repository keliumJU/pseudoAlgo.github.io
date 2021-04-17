<template>
  <div>
    <input
      type="file"
      accept=".xls,.xlsx"
      @change="readExcel"
      value="import excel"
    />
  </div>
</template>

<script>
import XLSX from "xlsx";

export default {
  name: "excel-import-export",
  props: {
    numsAle: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    readExcel(e) {
      const files = e.target.files;
      const fileReader = new FileReader(); // construction function that can read the file content
      fileReader.onload = ev => {
        const data = ev.target.result;
        const workbook = XLSX.read(data, {
          type: "binary" // binary
        });
        const wsname = workbook.SheetNames[0]; //take the first sheet
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //Get the data in this table
        ws.forEach(value => {
          console.log(value); // data for each line
        });
      };
      fileReader.readAsBinaryString(files[0]); // read file, trigger onload
    }
  }
};
</script>
