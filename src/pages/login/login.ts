import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //check user credentials
    let username = this.username;
    let password = this.password;

    if(username == 'testUser' && password == 123){
      let loader = this.loadingCtrl.create({
        content: 'Logging in...',
        duration: 2000
      })
      loader.present();
    }else{
    //  error : invalid credentials
    
    }
    // console.log('login function called');
  }

}
