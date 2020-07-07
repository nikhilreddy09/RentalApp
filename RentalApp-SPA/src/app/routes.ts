import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdListComponent } from './Ads/ad-list/ad-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdDetailComponent } from './Ads/Ad-detail/Ad-detail.component';
import { AdDetailResolver } from './_resolvers/ad-detail.resolver';
import { AdListResolver } from './_resolvers/ad-list.resolver';
export const appRoutes: Routes = [
    {path: '', component : HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'ads', component : AdListComponent, resolve: {ads: AdListResolver}},
            {path: 'ads/:id', component : AdDetailComponent, resolve: {ads: AdDetailResolver}},
            {path: 'messages', component : MessagesComponent},
            {path: 'lists', component : ListsComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
