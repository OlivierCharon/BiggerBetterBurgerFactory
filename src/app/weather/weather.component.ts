import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityName: string;
  data: any;
  isDataFound = true;

  constructor(public ws: WeatherService) { }

  ngOnInit() {
  }

  getWeather(): void {
    this.ws.getWeatherForCityName(this.cityName).subscribe(res => {
      this.isDataFound = true;
      this.data = res;
    }, error => {
      this.data = null;
      this.isDataFound = false;
    });
  }

}
