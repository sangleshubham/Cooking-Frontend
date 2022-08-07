import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private cookingService: CookingService
  ) {}

  categories = [];
  latestRecipes = []

  ngOnInit(): void {
    this.titleService.setTitle('Homepage');

    this.cookingService.getCategory().subscribe((res) => {
      this.categories = res.category;
      this.latestRecipes = res.recipe;
    });
  }
}
