import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/_models/Ad';
import { AdService } from 'src/app/_services/Ad.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Ad-detail',
  templateUrl: './Ad-detail.component.html',
  styleUrls: ['./Ad-detail.component.css']
})
export class AdDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  Ad: Ad;
  constructor(private adservice: AdService , private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.Ad = data['ads'];
    });
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (const photo of this.Ad.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

  // loadAd(){
  //   // tslint:disable-next-line: no-string-literal
  //   this.adservice.GetAd(+this.route.snapshot.params['id']).subscribe((ad: Ad) => {
  //     this.Ad = ad;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
}
