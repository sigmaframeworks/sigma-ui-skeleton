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

  constructor(public controller: ValidationController, public appState: UIApplication, public httpClient: UIHttpService) {
    ValidationRules
      .ensure((m: any) => m.username)
      .required()
      .email()
      .ensure(m => m.password)
      .required()
      .on(this.model);
  }

  bind() {
    this.model.username = this.appState.persist('AppUsername');
    this.model.password = this.appState.persist('AppPassword');
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
      .post('/login', this.model)
      .then(resp => {
        this.appState.login(this.model.username, this.remember ? this.model.password : null, resp.token);
      })
      .catch(e => this.error = e.message || e);
  }
}