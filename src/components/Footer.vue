<template>
  <div class="container-fluid" style="background-color: #eff5f5">
    <div class="row row-no-gutters">
      <div class="foot">
        <ul>
          <li class="col-heading">Location Data</li>
          <li>
            <b-icon icon="telephone-fill"></b-icon
            ><a href="tel:3203719763">3203719763</a>
          </li>
          <li>
            <b-icon icon="chat-text-fill"></b-icon
            ><a href="sms:3203719763">SMS Message</a>
          </li>
          <li>
            <b-icon icon="geo-alt-fill"></b-icon
            ><a href="https://goo.gl/maps/VB94qdzGTgo554JUA" target="_blank"
              >Address</a
            >
          </li>
          <li>
            <b-icon icon="mailbox2"></b-icon>
            <a href="mailto:zeyeju@gmail.com?subject=Email Subject line"
              >Email Us</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--  end row  -->

    <div class="row row-no-gutters" id="bottom-footer">
      <div class="col-xs-12 col-md-5 text-center">
        <ul class="vertical-links small">
          <li>
              <privacy/>
          <li>
              <terms-conditions/>
          </li>
          <li><a v-b-modal.site-map variant="primary">Site Map</a>
  <b-modal id="site-map" size="lg" title="Site Map">
      <img src="https://dynomapper.com/images/tree_sitemap_style.jpg" alt="site-map-example">
  </b-modal>
          </li>
          <li><a><router-link to="/about">Contact Us</router-link></a></li>
        </ul>
      </div>
      <div class="col-xs-12 col-md-2 text-center">
        <p><i class="fa fa-heart-o" aria-hidden="true"></i></p>
      </div>
      <div class="col-xs-12 col-md-5 text-center">
        <ul>
          <li class="small">
            © Copyright 2019 Website by
            <a href="https://github.com/keliumJU" target="_blank" style="color: white; font-weight: 500">Equipo 7</a>. All
            Rights reserved.
          </li>
        </ul>
      </div>
    </div>
    <!--  end row  -->
  </div>
  <!--  end container-fluid  -->
</template>

<script>
//import { } from 'bootstrap-vue'
import { BIcon } from "bootstrap-vue";
import Privacy  from "./Privacy.vue";
//import {TermsConditions} from "@/components/TermnsConditions.vue";
import TermsConditions from './TermsConditions.vue';
export default {
  name: "Footer",
  components: {
    BIcon,
    Privacy,
    TermsConditions,
  },
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
/* Reglas css para el footer */

.foot {
  display: flex;
  align-items: center;
  margin: auto;
}

ul {
  list-style: none;
}
ul > li > a {
  color: grey;
  text-decoration: none;
  line-height: 1.8;
}
ul > li > a:hover,
a:hover {
  color: #ff6600;
  font-weight: 500;
}

.col-heading {
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  color: #304f50;
  font-weight: 500;
  border-bottom: 1px solid #c7c7c7;
  letter-spacing: 3px;
  margin-top: 10px;
}

.fa {
  color: #304f50;
  font-size: 10px;
  width: 2.25rem;
}
#to-top {
  display: none;
  position: fixed;
  right: 20px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #304f50;
  color: white;
  border-radius: 14px;
  cursor: pointer;
  z-index: 99;
}
#to-top:hover {
  background-color: #555;
}

#bottom-footer {
  background-color: cadetblue;
  color: white;
}
.vertical-links > li {
  display: inline-block;
  vertical-align: text-bottom;
}
.vertical-links > li > a {
  color: white;
  font-weight: 400;
  list-style-type: square;
}
a {
  font-size: 0.8rem;
}
</style>