import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateaccountPage } from '../createaccount/createaccount';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  createuser(){
    this.navCtrl.push(CreateaccountPage, {});
  }
  login(){
    this.navCtrl.push(LoginPage, {});
  }
}
