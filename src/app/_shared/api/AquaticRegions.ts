import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {AquaticRegion} from '../models/AquaticRegion';

@Injectable()
export class AquaticRegions {

  regionCache:AquaticRegion;

  constructor(private http:Http) {
    this.getAll();
  }

  getAll() {
    return this.http.get(`/api/aquatic/region/all`).toPromise().then(res => {
      if (res.ok) this.regionCache = res.json();
    }).catch(e => {
      console.log('error: ', e);
    });
  }
}
