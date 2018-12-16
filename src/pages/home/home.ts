import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ITEMS, SHIFTS } from '../../models/items';
import { LongPressComponent } from '../../components/long-press/long-press';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {
  ITEMS_LIST: {} = ITEMS;
  CURRUNT_SHIFT: string = 'morning';
  toogleShifts = false;
  SHIFTS = SHIFTS;
  totalAmount: number;
  finalOrder = [];

  private previousShit = 'morning';
  private _subscription = new Subject();

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this._subscription.subscribe(() => {
      this.totalAmount = 0;
      this.finalOrder = [];
      from(this.ITEMS_LIST[this.CURRUNT_SHIFT])
        .pipe(
          filter(item => item['qty'] > 0)
        )
        .subscribe(item => {
          this.totalAmount += item['price'] * item['qty'];
          this.finalOrder.push(item);
        });
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  addNewOrder(item): void {
    item.qty++;
    this._subscription.next();
  }

  clearOrder(item): void {
    item.qty = 0;
    this._subscription.next();
  }

  clearAllOrders(): void {
    this.ITEMS_LIST[this.CURRUNT_SHIFT].forEach(item => {
      item.qty = 0;
    });
    this._subscription.next();
  }

  longPressEvent(item): void {
    let modal = this.modalCtrl.create(LongPressComponent, { data: item });
    modal.onDidDismiss(data => {
      if (data) {
        this._subscription.next();
      }
    });
    modal.present();
  }

  restItem(): void {
    this.ITEMS_LIST[this.previousShit].forEach(item => {
      item.qty = 0;
    });
    this.previousShit = this.CURRUNT_SHIFT;
    this._subscription.next();
  }

  checkoutOrder(): void {
    console.log(this.finalOrder);
  }
}
