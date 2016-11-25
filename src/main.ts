import {Aurelia, DOM} from 'aurelia-framework'
import {UIConfig, UIConstants} from "sigma-ui-framework";
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
    .plugin('aurelia-ui-virtualization')
    .plugin('aurelia-validation')
    .plugin('sigma-ui-framework', (config: UIConfig) => {
      // config
      //   .title('Sigam UI')
      //   .version('2.0.0')
      //   .appKey('SUF')
      //   .sendAuthHeader(true)
      //   .apiUrl('https://api.domain.com/api');
      // 
      // if (environment.debug) config.apiUrl('https://api-staging.domain.net/api');
    })
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start()
    .then(() => aurelia.setRoot())
    .then(() => DOM.removeNode(document.querySelector('.ui-splash')));
}
