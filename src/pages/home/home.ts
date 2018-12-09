import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ITEMS, SHIFTS } from '../../models/items';
import { LongPressComponent } from '../../components/long-press/long-press';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ITEMS_LIST: {} = ITEMS;
  CURRUNT_SHIFT: string = 'morning';
  toogleShifts = false;
  SHIFTS = SHIFTS;
  private previousShit = 'morning';
  constructor(public navCtrl: NavController, private modalCtrl: ModalController) { }

  addNewOrder(item): void {
    item.qty++;
  }

  longPressEvent(item): void {
    let modal = this.modalCtrl.create(LongPressComponent, { data: item });
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    modal.present();
  }

  restItem(): void {
    this.ITEMS_LIST[this.previousShit].forEach(item => {
      item.qty = 0;
    });
    this.previousShit = this.CURRUNT_SHIFT;
  }

  // adding a new order 
  // addToOrder(item, qty, shift): void {
  //   let flag = 0;
  //   let temp = 0;
  //   temp = parseInt(qty);
  //   if (this.ORDERS.length > 0) {
  //     for (let i = 0; i < this.ORDERS.length; i++) {
  //       if (item.id === this.ORDERS[i]['id']) {
  //         item.qty = parseInt(item.qty);
  //         item.qty += temp;
  //         flag = 1;
  //         break;
  //       }
  //     }

  //     if (flag === 0) {
  //       item.qty = 1;
  //     }
  //     if (item.qty < 2) {
  //       this.order.push(item);
  //     }
  //   } else {
  //     this.shift = shift;
  //     item.qty = qty;
  //     this.order.push(item);
  //   }
  // }

  // getDate(): void {
  //   let today = new Date();
  //   let mm = today.getMonth() + 1;
  //   let dd = today.getDate();
  //   let yyyy = today.getFullYear();

  //   let date = dd + "/" + mm + "/" + yyyy

  //   return date
  // }

}
