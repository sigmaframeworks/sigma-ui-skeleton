import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIConstants, UIApplication, AuthInterceptor} from "sigma-ui-framework";

@autoinject()
export class App {
  router: Router;
  constants = UIConstants;
  configureRouter(config, router: Router) {
    this.router = router;
    config.title = UIConstants.App.Title;
    config.addPipelineStep('authorize', AuthInterceptor);
    config.map([
      {
        route: ['', 'home'],
        moduleId: './home/view',
        title: 'Home',
        nav: false,
        auth: false,
        name: 'home'
      }]);
  }

  constructor(public app: UIApplication) { }
}