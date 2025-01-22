import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../_models/movie-dto';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  getMovies(city: string){
    return this.http.get<MovieDto[]>(this.apiUrl + city)
  }
}
