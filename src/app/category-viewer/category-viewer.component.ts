import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-category-viewer',
  templateUrl: './category-viewer.component.html',
  styleUrls: ['./category-viewer.component.scss']
})
export class CategoryViewerComponent implements OnInit {
  categories:any = undefined


  constructor(private titleService: Title,
    private cookingService: CookingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle('Category Viewer');
    this.route.params.subscribe( (param)=>{
      console.log(param['id'])
      this.cookingService.getCategories(param['id']).subscribe((res) => {
        console.log(res)
        this.categories = res
      });
    } )
    


  }

}
