import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.scss']
})
export class RecipeViewerComponent implements OnInit {

  recipe:any = undefined


  constructor(private titleService: Title,
    private cookingService: CookingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle('Recipe Viewer');
    this.route.params.subscribe( (param)=>{
      console.log(param['id'])
      this.cookingService.getRecipe(param['id']).subscribe((res) => {
        console.log(res)
        this.recipe = res[0]
      });
    } )
    


  }

}
