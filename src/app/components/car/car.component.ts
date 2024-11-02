import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from '../../models/carImage';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
    
  cars:Car[]=[];
  carImages:CarImage[]=[]
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarByBrand(params["brandId"])
      }
      else{
        this.getCars();
        this.getAllImage();
      }
    })
    
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarByBrand(brandId:number){
    this.carService.getCarByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
  }
  getAllImage(){
    this.carService.getAllImage().subscribe(response=>{
      this.carImages=response.data;
    })
  }
}
