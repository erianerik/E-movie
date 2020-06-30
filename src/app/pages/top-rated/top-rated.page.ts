import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

import { TopRated } from './../../model/top-rated';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.page.html',
  styleUrls: ['./top-rated.page.scss'],
})
export class TopRatedPage implements OnInit {

  topRates: TopRated;
  auxResult:any;
  constructor(
    private _movieService: MovieService,
  ) { }

  ngOnInit() {
    this._movieService.getTopRated().subscribe( result => {
      this.auxResult = result
      this.topRates = this.auxResult.results;
      console.log(this.topRates)
    })
  }

}
