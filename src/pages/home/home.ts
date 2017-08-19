import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes;

  constructor(public navCtrl: NavController) {
    this.notes = [
      {
        title: 'Sample Note',
        content: 'This is a sample note to the user'
      }
    ]
  }

}
