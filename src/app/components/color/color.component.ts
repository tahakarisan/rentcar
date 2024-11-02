import { Component } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {

  colors:Color[]=[];
  ngOnInit(): void {
    this.getAllColor();
  }

  constructor(private colorService:ColorService){}
  getAllColor(){
    this.colorService.getAllColor().subscribe(response=>{
      this.colors=response.data
    })
  }
}
