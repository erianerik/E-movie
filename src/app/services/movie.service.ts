import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import Modules
import { TopRated } from '../model/top-rated'

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

}
