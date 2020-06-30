import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import Modules
import { Popular }                    from './../model/popular';
import { TopRated }                   from '../model/top-rated'
import { Recommendations }            from '../model/recommendations';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey:string = "12ffdd3a8ef8dd8b4c3c3dd19dfe0db0";
  private apiUrl:string = 'https://api.themoviedb.org/3';

  constructor(
   private http: HttpClient,
  ) { }

  getTopRated(): Observable<TopRated> {
    return this.http.get<TopRated>(this.apiUrl + '/movie/top_rated?api_key=' + this.apiKey + '&language=pt-BR&page=1' ) ;
   }

  getRecommendations(): Observable<Recommendations> {
    return this.http.get<Recommendations>(this.apiUrl + '/movie/2/recommendations?api_key=' + this.apiKey + '&language=pt-br&page=1')
  }
  
  getPopular(): Observable<Popular> {
    return this.http.get<Popular>(this.apiUrl + '/movie/popular?api_key=' + this.apiKey + '&language=pt-br&page=1')
  }

}
