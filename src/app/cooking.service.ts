import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CookingService {

  searchData = []
  oldApplication : String  = ''

  constructor(private http:HttpClient) { }

  generateUrl(path : string){
    return `${environment.backEndDomain}/${path}`
  }

  getCategoryForHomepage(): Observable<any> {
    return this.http.get(this.generateUrl('getCategoriesHomepage'))
  }
  getCategory(): Observable<any> {
    return this.http.get(this.generateUrl('getCategories'))
  }

  getCategories(id : String): Observable<any> {
    return this.http.get(this.generateUrl('getCatagory/')+id)
  }

  getRecipe(id : String): Observable<any> {
    return this.http.get(this.generateUrl('getRecipe/')+id)
  }


  getRecipes(): Observable<any> {
    return this.http.get(this.generateUrl('getRecipes'))
  }

  getSearch(key : String): Observable<any> {
    
    let body = {
      "search" : key
    }

    return this.http.post(this.generateUrl('search') , body)
  }
  


}
