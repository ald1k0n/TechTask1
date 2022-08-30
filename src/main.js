import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCB5mTqRD8QV6gpxHZ440zLwZUKK5wqBJw',
    libraries: 'places',
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
