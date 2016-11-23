import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class App {
  router: Router;
  configureRouter(config, router: Router) {
    this.router = router;
    config.title = "Sigma UI";
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
}