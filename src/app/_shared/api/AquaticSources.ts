import {Injectable} from "@angular/core";
import {AquaticSource} from "../models/AquaticSource";
import {Http, Response} from "@angular/http";

const producePattern = ['CATCH', "FEED", "PROPAGATION"];
@Injectable()
export class AquaticSources {

  constructor(private http:Http) {

  }

  items:AquaticSource[] = [];
  recommendedItems:AquaticSource[] = [];
  totalItems = 0;
  isLoading = false;

  query(categorys:string, keyword:string, pattern:string, region:string, page:Number):Promise<AquaticSource> {
    let targetUrl = '';
    if(categorys){
      targetUrl = `/api/admin/aquaticSource/listByCategorys?categorys=` + encodeURI(categorys || "")
    }else{
      targetUrl = `/api/aquatic/search?name=` + encodeURI(keyword || "");
      if (pattern && producePattern.indexOf(pattern) > -1) {
        targetUrl += '&producePattern=' + encodeURI(pattern || "");
      }
      if (region) {
        let isHomemade = parseInt(region);
        if (Number.isInteger(isHomemade)) {
          targetUrl += '&isHomemade=' + encodeURI(isHomemade.toString() || "");
        }
      }
    }
    if (page) targetUrl += '&page=' + `${page}`;
    this.isLoading=true;
    return this.http.get(targetUrl)
      .toPromise().then((res:Response)=> {
        this.isLoading = false;
        var data = res.json();
        this.items = (data.origin && data.origin[0]) ? data.origin : false;
        this.recommendedItems = (data.recommended && data.recommended[0]) ? data.recommended.slice(0, 3) : false;
        this.totalItems = data.countNumber || 0;
        return this.items;
      });
  }

  get(id:number | string) {
    return this.http.get(`/api/aquatic/show/${id}`)
      .toPromise().then((res:Response)=> {
        var data = res.json();
        return data;
      });
  }

  findRecommend(){
    return this.http.get(`/api/aquatic/recommended`)
      .toPromise().then((res:Response)=> {
        var data = res.json();
        return data;
      });
  }

  getSummary(){
    return this.http.get(`/api/aquatic/summary`)
      .toPromise().then((res:Response)=> {
        var data = res.json();
        return data;
      });
  }

}
