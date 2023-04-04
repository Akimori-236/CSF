import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, firstValueFrom, map, tap } from 'rxjs'
import { Weather } from "./models";


const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
const APIKEY = "f98983c637320a06d8d97b0faa526aa5"


@Injectable(
    //{providedIn: 'root'} // tell service which module its in (either here or in app.module.ts)
)
export class WeatherService {

    // data pipeline for components to sub to
    onWeather = new Subject<Weather[]>

    constructor(private http: HttpClient) { }

    getWeatherAsObservable(city: string): Observable<Weather[]> {
        const params = new HttpParams()
            .set('q', city)
            .set('units', 'metric')
            .set('appid', APIKEY)

        // {params: params} == {params}
        return this.http.get<Weather[]>(WEATHER_URL, { params })
            .pipe(
            // map((data: any) => {
            //     console.info('>>>> in map')
            //     return data['weather'] as Weather[]
            // }),
            // tap(data => {
            //     console.info('>>>> data: ', data)
            //     this.onWeather.next(data)
            // })
        )
    }

    getWeather(city: string): Promise<Weather[]> {
        return firstValueFrom(
            this.getWeatherAsObservable(city)
        ).then((data: any) => {
            // map() and tap()
            const w = data['weather'] as Weather[]
            //this.onWeather.next(w)
            return w
        })
            .then(data => {
                this.onWeather.next(data)
                return data
            })
    }
}

// map & tap - declarative
// then - imperative