let Vue = require('vue')
let App = require('app.vue')

Vue.config.debug = true

Vue({
	el: 'html',
	components: {
		app: App
	}
})
