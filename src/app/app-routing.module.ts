import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineralCollectionDisplayComponent } from './mineral-collection-display/mineral-collection-display.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mineralForm', component: MineralCollectionDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
