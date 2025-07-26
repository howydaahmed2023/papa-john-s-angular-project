import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'careers',component:CareersComponent},
  {path:'customer-service',component:CustomerServiceComponent},
  {path:'branches',component:BranchesComponent},
  {path:'pizzas',component:PizzasComponent}



];
