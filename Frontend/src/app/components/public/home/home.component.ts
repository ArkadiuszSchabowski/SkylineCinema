import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/_services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  constructor(private cityService: CityService){
  }
  
  setCity(city: string){
    this.cityService.setCity(city);
  }
}