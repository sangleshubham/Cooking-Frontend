import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule,routerComponent } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { RecipeViewerComponent } from './recipe-viewer/recipe-viewer.component';
import { RecipeExplorerComponent } from './recipe-explorer/recipe-explorer.component';
import { CategoryViewerComponent } from './category-viewer/category-viewer.component';

@NgModule({ 
  declarations: [
    AppComponent,routerComponent, CategoryComponent, RecipeViewerComponent, RecipeExplorerComponent, CategoryViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
