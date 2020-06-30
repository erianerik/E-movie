import { Popular } from './../../model/popular';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {
  auxResult:any;
  popular: Popular;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    this._movieService.getPopular().subscribe(result => {
      this.auxResult = result;
      this.popular = this.auxResult.results
      console.log(this.popular);
      
    })
  }

}
