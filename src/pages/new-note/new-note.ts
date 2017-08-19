import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NewNotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-note',
  templateUrl: 'new-note.html',
})
export class NewNotePage {

  noteContext;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.noteContext = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewNotePage');
  }

  save(){
    this.view.dismiss(this.noteContext);
  }

  close(){
    this.view.dismiss();
  }

}
