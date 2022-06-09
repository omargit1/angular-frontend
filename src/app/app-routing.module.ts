import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user-list', component: UserComponent },
  { path: 'detail/:id', component: DetailUserComponent },
  { path: 'test-page', component: TestPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
