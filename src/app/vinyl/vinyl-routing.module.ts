import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinylListComponent } from './pages/vinyl-list/vinyl-list.component';
import { VinylDetailComponent } from './pages/vinyl-detail/vinyl-detail.component';

const routes: Routes = [
    { path: 'list', component: VinylListComponent },
    { path: 'detail', component: VinylDetailComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ] 
})
export class VinylRoutingModule {}