<template>
  <div>
    <a v-b-modal.site-map variant="primary">Site Map</a>
    <b-modal id="site-map" size="lg" title="Site Map">
      <img
        src="https://dynomapper.com/images/tree_sitemap_style.jpg"
        alt="site-map-example"
      />
    </b-modal>
  </div>
</template>

<script>
import { BModal, VBModal } from "bootstrap-vue";
export default {
  name: "SiteMap",
  components: {
    BModal
  },
  directives: {
    "b-modal": VBModal
  }
};
</script>
