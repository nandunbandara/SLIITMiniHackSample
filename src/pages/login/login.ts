import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //check user credentials
    let username = this.username;
    let password = this.password;

    if(username == 'user' && password == 123){
      let loader = this.loadingCtrl.create({
        content: 'Logging in...',
        duration: 500
      })
      loader.present();
    //  load home page
      this.navCtrl.push(HomePage);
    }else{
    //  error : invalid credentials
      let alert = this.alertCtrl.create({
        title: 'Invalid Login',
        subTitle: 'Could not authenticate user. Please check your login credentials!',
        buttons: ['OK']
      });
      alert.present();
    }
    // console.log('login function called');
  }

  passwordReset(){
    let pwdResetAlert = this.alertCtrl.create({
      title: 'Password Reset!',
      subTitle: 'Please contact your Administrator/Supervisor to reset your password.',
      buttons: ['OK']
    });

    pwdResetAlert.present();
  }

}
