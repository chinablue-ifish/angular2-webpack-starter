import {Component, OnInit} from "@angular/core";
import {RouterLink} from '@angular/router';
import {TrustAsImgUrlPipe} from '../_shared/pipes/trust-as-img-url';
import {AquaticSources} from '../_shared/api/AquaticSources';
import {UrlStrengthPipe} from '../_shared/pipes/UrlStrength';


@Component({
  selector: 'home-recommended',
  template: require('./recommended.html'),
  styles: [
    require('./recommended.scss')
  ],
  directives: [RouterLink],
  pipes: [TrustAsImgUrlPipe, UrlStrengthPipe],
})
export class HomeRecommended implements OnInit {
  constructor(private sources: AquaticSources) {
    sources.findRecommend().then((res)=>{
      res.map((obj)=>{
        var result = {
          commonName: obj.name,
          image: obj.imageUrl,
          url: obj.detailsUrl,
          urlParams: {id: obj.id}
        }
        this.recommendedSources.push(result);
        return result;
      });
    })
  }

  recommendedSources = [];
  ngOnInit() {
  }

}
