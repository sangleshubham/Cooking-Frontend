import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookingService } from './cooking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cooking-frontend';

  searchText = '';
  constructor(
    private titleService: Title,
    private cookingService: CookingService,
    private router: Router
  ) {
    cookingService.getSearch('Christmas pie').subscribe((res) => {
      console.log(res);
    });
  }

  getSearchData(event: any) {
    console.log(event);
    if (event != '') {
      this.cookingService.getSearch(event).subscribe((res) => {
        this.cookingService.searchData = res;
      });
      if (this.cookingService.oldApplication == '') {
        this.cookingService.oldApplication = this.router.url;
      }

      console.log(this.router.url);
      this.router.navigate(['/search']);
    } else {
      this.router.navigate([this.cookingService.oldApplication]);
      this.cookingService.oldApplication = '';
    }
  }
}
