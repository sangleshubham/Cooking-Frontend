import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CookingService {

  constructor(private http:HttpClient) { }

  generateUrl(path : string){
    return `${environment.backEndDomain}/${path}`
  }

  getCategory(): Observable<any> {
    return this.http.get(this.generateUrl('getCategoriesHomepage'))
  }

  


}
