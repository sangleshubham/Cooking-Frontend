import { Component, OnInit } from '@angular/core';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(public cookingService : CookingService) { }
  ngOnInit(): void {
  }

}
