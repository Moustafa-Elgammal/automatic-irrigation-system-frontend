import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlotComponent } from './components/add-plot/add-plot.component';
import { ListPlotsComponent } from './components/list-plots/list-plots.component';
import { UpdatePlotComponent } from './components/update-plot/update-plot.component';

const routes: Routes = [
  {path: '', redirectTo: '/plots', pathMatch: 'full'},
  {path: 'plots', component: ListPlotsComponent},
  {path: 'plots/add', component: AddPlotComponent},
  {path: 'plots/:id', component: UpdatePlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
