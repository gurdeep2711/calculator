import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class HomeProvider {

  constructor(public afs: AngularFirestore) { }

  saveOrders(shift, data) {
    return this.afs.collection(`orders/canteen_1/${shift}`).add(data);
  }
}
