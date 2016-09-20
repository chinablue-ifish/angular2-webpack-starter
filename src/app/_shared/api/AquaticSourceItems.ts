import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AquaticSourceItems {
  constructor(private http:Http) {

  }
  
  updateVendorNames(id:string, name:string) {
    return this.http.post(`/api/order/item/update`, JSON.stringify({
      id: id,
      vendorNames: name
    }), {headers: new Headers({'Content-Type': 'application/json'})})
      .toPromise().then(res=> {
        console.log('update ==', res);
        return res.ok;
      }).catch(e=> {
        console.log(e)
      });
  }
}
