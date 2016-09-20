import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AquaticSourceVendorMaps {
  constructor(private http:Http) {
    
  }

  getVendorInfoBaySourceId(id) {
    return this.http.get(`/api/source/vendor/map?id=${id}`).toPromise().then(res=> {
      return res.json();
    }).catch(e=> {
      console.log('err: ', e)
    });
  }
}
