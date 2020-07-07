import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ad } from '../_models/Ad';

// const httpoptions = {
//   headers: new HttpHeaders({
//     // tslint:disable-next-line: object-literal-key-quotes
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AdService {
  baseurl = environment.apiUrl;
constructor(private http: HttpClient) { }

  GetAds(): Observable<Ad[]>{
    return this.http.get<Ad[]>(this.baseurl + 'ad');
  }

  GetAd(id): Observable<Ad>{
    return this.http.get<Ad>(this.baseurl + 'ad/' + id);
  }
}
