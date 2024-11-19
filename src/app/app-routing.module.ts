import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"Cars/Brand/:brandId",component:CarComponent},
  {path:"Cars/Color/:colorId",component:CarComponent},
  {path:"Cars/Details/:carId",component:CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
