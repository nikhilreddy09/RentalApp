import { Component, OnInit } from '@angular/core';
import { Ad } from '../../_models/Ad';
import { AdService } from '../../_services/Ad.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  Ads: Ad[];
  constructor(private adservice: AdService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.Ads = data['ads'];
    });
  }
  // loadAds(){
  //   this.adservice.GetAds().subscribe((ads: Ad[]) => {
  //     this.Ads = ads;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
}
