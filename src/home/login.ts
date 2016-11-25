import {inject, NewInstance} from "aurelia-framework";
import {ValidationController, ValidationRules} from "aurelia-validation";
import {UIConstants, UIApplication, UIHttpService, UIEvent} from "sigma-ui-framework";

@inject(NewInstance.of(ValidationController), UIApplication, UIHttpService)
export class Login {
  constants = UIConstants;
  error = '';
  remember = false;
  model = {
    username: '',
    password: ''
  }

  constructor(public controller: ValidationController, public app: UIApplication, public httpClient: UIHttpService) {
    ValidationRules
      .ensure((m: any) => m.username)
      .required()
      .email()
      .ensure(m => m.password)
      .required()
      .on(this.model);
  }

  bind() {
    this.model.username = this.app.persist('AppUsername');
    this.model.password = this.app.persist('AppPassword');
    this.remember = this.model.password != null;
  }

  attached() {
    if (this.remember) this.doLogin();
  }

  doLogin() {
    this.controller.validate()
      .then(e => {
        if (e.length == 0) this.postLogin();
      });
  }

  postLogin() {
    this.httpClient
      .post('/login', { userId: this.model.username, password: this.model.password })
      .then(resp => {
        this.app.login(this.model.username, this.remember ? this.model.password : null, resp.token);
      })
      .catch(e => this.error = e.message || e);
  }
}