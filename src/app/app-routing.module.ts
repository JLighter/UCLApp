import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'not-found', component: NotFoundComponent },
    { 
        path: 'vinyl', 
        loadChildren: () => import('./vinyl/vinyl.module').then(mod => mod.VinylModule) 
    },
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) 
    },
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}