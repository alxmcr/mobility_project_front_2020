import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPS_TOKEN,
  },
  installComponents: true
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
