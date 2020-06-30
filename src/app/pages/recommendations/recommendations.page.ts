import { Component, OnInit } from '@angular/core';

import { MovieService }       from './../../services/movie.service';
import { Recommendations }    from './../../model/recommendations';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  auxResult:any;
  recommendations: Recommendations;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    this._movieService.getRecommendations().subscribe(result => {
      this.auxResult = result;
      this.recommendations = this.auxResult.results;
      console.log(this.recommendations);
      
    })
  }

}
