import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Weather } from './models';
import { WeatherService } from './WeatherService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day34';

  form!: FormGroup
  weather: Weather[] = []
  weather$!: Observable<Weather[]>

  constructor(private fb: FormBuilder, private weatherSvc: WeatherService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      city: this.fb.control<string>('', [Validators.required]),
    })
  }

  // getWeather() {
  //   const city = this.form.value.city
  //   console.log(">>> CITY : ", city)
  //   this.weatherSvc.getWeather(city)
  //     .then(
  //       result => this.weather = result
  //     )
  // }

  getWeather() {
    const city = this.form.value.city
    console.log(">>> CITY : ", city)
    // this.weather$ = this.weatherSvc.getWeatherAsObservable(city)
    this.weatherSvc.getWeather(city)
  }
}
