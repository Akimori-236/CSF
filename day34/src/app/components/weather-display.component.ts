import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Weather } from '../models';
import { WeatherService } from '../WeatherService';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit, OnDestroy {

  weather$!: Observable<Weather[]>
  weather: Weather[] = []
  weatherSub!: Subscription

  // @Autowired
  constructor(private weatherSvc: WeatherService) { }

  ngOnInit(): void {
    // this.weather$ = this.weatherSvc.onWeather
    // <weatherSvc (onWeather)="$event"> kinda thing where event becomes 'data'
    this.weatherSub = this.weatherSvc.onWeather.subscribe(
      (data) => this.weather = data
    )
  }

  ngOnDestroy(): void {
    this.weatherSub.unsubscribe()
  }

}
