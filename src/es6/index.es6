let Vue = require('vue')
let App = require('app.vue')

Vue.config.debug = true;

new Vue({
  el: 'html',
  components: {
    app: App
  }
});
