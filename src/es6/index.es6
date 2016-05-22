let Vue = require('vue')
let App = require('app.vue')

Vue.config.debug = true
Vue.config.devtools = false

new Vue({ // eslint-disable-line no-new
	el: 'body',
	components: {
		app: App
	}
})
