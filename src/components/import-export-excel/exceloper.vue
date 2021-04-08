<template>
<div>
    <v-btn color="primary" dark class="mb-2" @click="exportExcel">
      Exportar
    </v-btn>
</div>
</template>

<script>
import XLSX from "xlsx";
export default {
  name: "excel-import-export",
  props: {
    numsAle: {
      type: Array,
      default: () => [],
    },
    nameFile: {
      type: String,
      default: "nums-ale",
    },
  },
  methods: {
    exportExcel() {
      let nums = [];
      for (let i = 0; i < this.numsAle.length; i++) {
        nums.push({ num: String(this.numsAle[i].num) });
      }
      //const dataJson = JSON.stringify(nums)
      //console.log(nums)
      //console.log(dataJson)
      const jsonWorkSheet = XLSX.utils.json_to_sheet(nums);
      const workBook = {
        SheetNames: ["jsonWorkSheet"], // sheet name
        Sheets: {
          jsonWorkSheet: jsonWorkSheet,
        },
      };

      XLSX.writeFile(workBook, this.nameFile + ".xlsx");
    },
  },
};
</script>