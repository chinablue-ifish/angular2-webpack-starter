import {Injectable} from '@angular/core';
import {PurchasingOrder} from "../models/PurchasingOrder";
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class PurchasingOrders {
  constructor(private http:Http) {
    // this.query(null);
  }

  items:PurchasingOrder[] = [];

  query(num) {
    if(!num) num = 0;
    this.http.get(`/api/order/search?page=${num}`).toPromise().then((res:Response)=> {
      if (res.ok) {
        this.items = res.json();
      }
    });
  }

  get(id:number|string):Promise<PurchasingOrder> {
    return this.http.get(`/api/order/${id}`).toPromise().then((res:Response) => {
      return res.json();
    });
  }

  savePurchasingOrder(name:string, id:string):Promise<PurchasingOrder> {
    return this.http.post(`/api/order/createOrderAndItem`, JSON.stringify({
      orderName: name,
      aquaticSourceId: id
    }), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then((res:Response) => {
      return res.status == 200;
    });
  }

  deletePurchasingOrderItem(id:string) {
    return this.http.delete(`/api/order/deleteItem/${id}`).toPromise().then(res=> {
      return res.ok;
    }).catch(e=> {
      console.log(e);
    });
  }

  addPurchasingOrderItem(orderId:string, aquaticSourceId:string) {
    return this.http.post(`/api/order/addItem`, JSON.stringify({
      id: orderId,
      aquaticSourceId: aquaticSourceId
    }), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then((res:Response) => {
      return res;
    }).catch(e=> {
      console.log(e);
      return e;
    });
  }

  getPurchasingOrderList() {
    return this.http.get(`/api/order/all`).toPromise().then((res:Response) => {
      if (res.ok) return res.json();
      else return false;
    }).catch(e=> {
      console.log(e);
    });
  }


  updatePurchasingOrder(obj) {
    return this.http.post(`/api/order/update`, JSON.stringify(obj), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then((res) => {
      console.log(res);
      return res.status == 200;
    });
  }

  downloadPurchasingOrder(id:string) {
    return this.http.get(`/api/order/export/${id}`).toPromise().then(res=> {
      return res;
    }).catch((e)=> {
      console.log(e);
    });
  }

  deletePurchasingOrder(id:string) {
    return this.http.delete(`/api/order/delete/${id}`).toPromise().then(res=> {
      return res.ok;
    }).catch(e=> {
      console.log(e)
    });
  }
}
