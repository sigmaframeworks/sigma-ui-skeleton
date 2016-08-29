import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIConstants, UIApplication, AuthInterceptor} from "sigma-ui-framework";

@autoinject()
export class App {
    private router: Router;

    configureRouter(config, router: Router) {
        this.router = router;
        config.title = UIConstants.App.Title;
        config.options.showLogo = true;
        config.options.showAuthentication = true;
        config.addAuthorizeStep(AuthInterceptor);
        config.mapUnknownRoutes({ redirect: 'home' });
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
    }
}
