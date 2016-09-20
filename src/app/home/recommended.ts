import {Component, OnInit} from "@angular/core";
//TODO:deprecated;  import {RouterLink} from '@angular/router';
import {AquaticSources} from '../_shared/api/AquaticSources';



@Component({
  selector: 'home-recommended',
  template: require('./recommended.html'),
  styles: [
    require('./recommended.scss')
  ],
  //TODO:deprecated;   directives: [RouterLink],
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
