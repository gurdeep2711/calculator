import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'long-press',
  templateUrl: 'long-press.html'
})
export class LongPressComponent {
  DATA: {};
  currentQty: Number = 0;
  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    if (this.navParams.get('data')) {
      this.DATA = this.navParams.get('data');
      this.currentQty = this.DATA['qty'];
    }
  }

  closeModal(data): void {
    let _DATA = this.DATA;
    if (data) {
      data = Math.abs(data);
      data = Math.floor(data);
      Object.assign(_DATA, { qty: data })
    }
    this.viewCtrl.dismiss(_DATA);
  }
}
