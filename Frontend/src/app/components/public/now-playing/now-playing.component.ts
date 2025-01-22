import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MovieDto } from 'src/app/_models/movie-dto';
import { CityService } from 'src/app/_services/city.service';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NowPlayingComponent {
  minDate: Date;
  city: string = '';
  movies: MovieDto[] = [];

  constructor(
    private cityService: CityService,
    private movieService: MovieService
  ) {
    this.minDate = new Date();
    this.getCity();
    this.getMovies(this.city);
  }
  getCity() {
    this.cityService.city$.subscribe((city) => {
      this.city = city;
    });
  }

  getMovies(city: string) {
    this.movieService.getMovies(city).subscribe((movies: MovieDto[]) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}
