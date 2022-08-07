import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  categories = []

  constructor(private titleService: Title,
    private cookingService: CookingService
    ) { }

  ngOnInit(): void {

    this.titleService.setTitle('Homepage');

    this.cookingService.getCategory().subscribe((res) => {
      this.categories = res;
    });
  }

}
