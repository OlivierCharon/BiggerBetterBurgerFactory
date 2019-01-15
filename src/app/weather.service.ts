import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) {
  }

  getWeatherForLyon(): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/' +
      'weather?q=Lyon' +
      '&units=metric' +
      '&appid=ecbe9035c76ce84984b9ec85a6d5aa67');
  }

  getWeatherForCityName(cityName: string): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/' +
      'weather?q=' + cityName +
      '&units=metric' +
      '&appid=ecbe9035c76ce84984b9ec85a6d5aa67');
  }
}
