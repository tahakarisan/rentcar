import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BrandResponseModel } from '../models/brandResponseModel';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  getAllurl= "https://localhost:44398/api/Brands/GetAllBrand"
  constructor(private httpClient:HttpClient){}
   
  getBrands():Observable<BrandResponseModel>{
      return this.httpClient.get<BrandResponseModel>(this.getAllurl)
    }
}
