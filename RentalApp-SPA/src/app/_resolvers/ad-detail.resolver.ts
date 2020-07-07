import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Ad } from '../_models/Ad';
import { AdService } from '../_services/Ad.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import {Injectable} from '@angular/core';

@Injectable()
export class AdDetailResolver implements Resolve<Ad> {
    constructor(private adService: AdService , private router: Router, private alertify: AlertifyService){}
   resolve(route: ActivatedRouteSnapshot): Observable<Ad> {
       // tslint:disable-next-line: no-string-literal
       return this.adService.GetAd(route.params['id']).pipe(
           catchError(error => {
               this.alertify.error('problem retrieving Data');
               this.router.navigate(['/ads']);
               return of(null);
           })
       );
   }
}
