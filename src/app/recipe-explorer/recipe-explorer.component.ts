import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-recipe-explorer',
  templateUrl: './recipe-explorer.component.html',
  styleUrls: ['./recipe-explorer.component.scss']
})
export class RecipeExplorerComponent implements OnInit {

  categories = []

  constructor(private titleService: Title,
    private cookingService: CookingService
    ) { }

  ngOnInit(): void {

    this.titleService.setTitle('Homepage');

    this.cookingService.getRecipes().subscribe((res) => {
      this.categories = res;
    });
  }

}
