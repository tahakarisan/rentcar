import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor:Color|null=null;
  constructor(private colorService:ColorService){}
  ngOnInit(): void {
    this.getAllColor();
  }

  getAllColor(){
    this.colorService.getAllColor().subscribe(response=>{
      this.colors=response.data
    })
  }
  setCurrentColor(color:Color|null){
    this.currentColor=color
  }
  getCurrentColorClass(color:Color){
    if(this.currentColor==color){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllCurrentColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
