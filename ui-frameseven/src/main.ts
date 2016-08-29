import {Aurelia} from 'aurelia-framework'
import environment from './environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
	warnings: {
		wForgottenReturn: false
	}
});

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature('resources')
		.plugin('aurelia-validation')
		.plugin('aurelia-validatejs')
		.plugin('sigma-ui-framework', function(config) {
		});

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin('aurelia-testing');
	}

	aurelia.start()
		.then(() => aurelia.setRoot())
		.then(() => {
			var splash = window.document.querySelector('.ui-splash');
			splash.classList.add('animate');
			setTimeout(() => {
				splash.parentElement.removeChild(splash);
			}, 1000);
		})
		.catch(e => {
			console.log(e);
		});;
}
