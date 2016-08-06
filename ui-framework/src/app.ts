import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIConstants, UIApplication} from "sigma-ui-framework";

@autoinject()
export class App {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = UIConstants.App.Title;
		config.map([{
			route: ['', 'home'],
			moduleId: './home/view',
			title: 'Dashboard',
			nav: true,
			auth: false,
			name: 'home'
		}]);
	}

	constructor(public app: UIApplication) {
		app.IsAuthenticated = true;
	}
}
