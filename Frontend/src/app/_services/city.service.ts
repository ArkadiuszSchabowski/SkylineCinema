import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  private citySubject = new BehaviorSubject<string>("gliwice");
  city$ = this.citySubject.asObservable();

  setCity(city: string){
    this.citySubject.next(city);
  }
}