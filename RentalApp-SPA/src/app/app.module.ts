import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AdListComponent } from './Ads/ad-list/ad-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AdCardComponent } from './Ads/Ad-card/Ad-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AdDetailComponent } from './Ads/Ad-detail/Ad-detail.component';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { AdDetailResolver } from './_resolvers/ad-detail.resolver';
import { AdListResolver } from './_resolvers/ad-list.resolver';

export function tokenGetter() {
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
   overrides = {
      pinch: {enable: false},
      rotate: {enable: false}
   };
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      AdListComponent,
      ListsComponent,
      MessagesComponent,
      AdCardComponent,
      AdDetailComponent
   ],
   imports: [
      BrowserModule,
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AdDetailResolver,
      AdListResolver,
      {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
