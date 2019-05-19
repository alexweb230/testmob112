import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
// import { routes } from './app.routes';
import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {NewsDetailComponent} from './news-detail/news-detail.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'detail', component: NewsDetailComponent},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
