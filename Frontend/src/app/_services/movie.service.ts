import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  getMovies(city: string){
    return this.http.get(this.apiUrl + city)
  }
}
