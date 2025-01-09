import { Component } from '@angular/core';
import { CityService } from 'src/app/_services/city.service';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {

  city: string = "";

  constructor(private cityService: CityService, private movieService: MovieService) {
    this.getCity();
    this.getMovies(this.city);
  }
  getCity(){
    this.cityService.city$.subscribe(city => {
      this.city = city;
    })
  }

  getMovies(city: string){
    this.movieService.getMovies(city).subscribe(movies =>{
      console.log(movies);
    });
  }
}