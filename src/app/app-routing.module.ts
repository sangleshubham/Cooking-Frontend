import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component';
import { RecipeExplorerComponent } from './recipe-explorer/recipe-explorer.component';
import { RecipeViewerComponent } from './recipe-viewer/recipe-viewer.component';
import { CategoryViewerComponent } from './category-viewer/category-viewer.component';


const routes:Routes = [
  { path:'', component : HomepageComponent },
  { path:'categories', component : CategoryComponent },
  { path:'explore-latest', component : RecipeExplorerComponent },
  { path:'recepie/:id', component : RecipeViewerComponent },
  { path:'about', component : HomepageComponent },
  { path:'submit-recipe', component : HomepageComponent },
  { path:'contact', component : HomepageComponent },
  { path:'category/:id', component : CategoryViewerComponent },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
// add all component here it will automatically add it to app.component
export const routerComponent = [HomepageComponent] 