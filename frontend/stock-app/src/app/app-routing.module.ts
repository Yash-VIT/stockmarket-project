import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CreateCompanyComponent } from './components/create-company/create-company/create-company.component';
import { HomeComponent } from './components/home/home/home.component';
import { IpoListComponent } from './components/ipo-list/ipo-list.component';
import { SectorListComponent } from './components/sector-list/sector-list/sector-list.component';
import { StockListComponent } from './components/stock-list/stock-list/stock-list.component';
import { StockexListComponent } from './components/stockex-list/stockex-list/stockex-list.component';
import { UpdateCompanyComponent } from './components/update-company/update-company/update-company.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'company/display', component: CompanyListComponent},
  {path: 'company/create', component: CreateCompanyComponent},
  {path: 'company/ipo', component: IpoListComponent},
  {path: 'sector', component: SectorListComponent},
  {path: 'stockex', component: StockexListComponent},
  {path: 'company/editCompany/:id', component: UpdateCompanyComponent},
  {path: 'company/stocks', component: StockListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
