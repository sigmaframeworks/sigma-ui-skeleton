import {autoinject} from "aurelia-framework";
import {FSApplication} from "sigma-ui-frameseven";

@autoinject()
export class Home {
    constructor(public app: FSApplication) { }
}
