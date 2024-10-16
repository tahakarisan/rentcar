import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  carGetAllUrl= "https://localhost:44398/api/Cars/GetAllCar";
  constructor(private httpClient:HttpClient) {}
  
  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.carGetAllUrl);
  }
}
