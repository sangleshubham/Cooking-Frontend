import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes:Routes = [
  { path:'', component : HomepageComponent },
  { path:'about', component : HomepageComponent },
  { path:'submit-recipe', component : HomepageComponent },
  { path:'contact', component : HomepageComponent },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
// add all component here it will automatically add it to app.component
export const routerComponent = [HomepageComponent] 