import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VinylModule } from './vinyl/vinyl.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    VinylModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
