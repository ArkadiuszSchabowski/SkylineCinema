import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/_services/city.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  city: string | null = null;
  constructor(private cityService: CityService){
    this.getCity();
  }
  getCity(){
    this.cityService.city$.subscribe(city => {
      this.city = city;
    })
  }
}
