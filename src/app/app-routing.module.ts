import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDetailsComponent } from './details/page-details/page-details.component';
import { PageDiscoverComponent } from './discover/page-discover/page-discover.component';
import { PageHomeComponent } from './home/page-home/page-home.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'detail/:id', component: PageDetailsComponent },
  { path: 'discover', component: PageDiscoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
