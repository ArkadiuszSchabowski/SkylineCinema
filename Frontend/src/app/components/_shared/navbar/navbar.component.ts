import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from 'src/app/_services/city.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  city: string | null = null;
  constructor(private cityService: CityService, private router: Router){
    this.getCity();
  }
  getCity(){
    this.cityService.city$.subscribe(city => {
      this.city = city;
      if (this.city) {
        // this.router.navigate([`/${this.city}`]);
      }
    })
  }
}