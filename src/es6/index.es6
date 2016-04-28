let Vue = require('vue')
let App = require('app.vue')

Vue.config.debug = true

new Vue({ // eslint-disable-line no-new
	el: 'html',
	components: {
		app: App
	}
})
