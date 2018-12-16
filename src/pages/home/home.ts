import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { ITEMS, SHIFTS } from '../../models/items';
import { LongPressComponent } from '../../components/long-press/long-press';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { HomeProvider } from '../../providers/home/home';

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

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
    private homeProv: HomeProvider, private toastCtrl: ToastController) { }

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
    this.restAll(this.CURRUNT_SHIFT);
    this._subscription.next();
  }

  longPressEvent(item): void {
    let modal = this.modalCtrl.create(LongPressComponent, { data: item });
    modal.onDidDismiss(() => {
      this._subscription.next();
    });
    modal.present();
  }

  restItem(): void {
    this.restAll(this.previousShit);
    this.previousShit = this.CURRUNT_SHIFT;
    this._subscription.next();
  }

  checkoutOrder(): void {
    let data = {
      total: this.totalAmount,
      orders: this.finalOrder,
      timeStamp: new Date()
    }
    this.homeProv.saveOrders(this.CURRUNT_SHIFT, data).then(() => {
      const toast = this.toastCtrl.create({
        message: 'Thanks!, Payment received successfully.',
        duration: 3000,
        position: 'bottom'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
      this.restAll(this.CURRUNT_SHIFT);
      this._subscription.next();
    })
  }

  private restAll(shift): void {
    this.ITEMS_LIST[shift].forEach(item => {
      item.qty = 0;
    });
  }
}
