import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"Cars/brand/:brandId",component:CarComponent},
  {path:"Cars/color/:colorId",component:CarComponent},
  {path:"Cars/brand/:brandId/color/:colorId",component:CarComponent},
  {path:"Cars/Details/:carId",component:CarDetailComponent},
  {path:"Cars/brand/:brandFilter/color/:colorFilter",component:CarFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
