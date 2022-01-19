import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey: string = 'b6025a6612fef51affd5208d98636fc4';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }

}
