import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinylListComponent } from './pages/vinyl-list/vinyl-list.component';
import { VinylDetailComponent } from './pages/vinyl-detail/vinyl-detail.component';
import { VinylResolver } from './resolvers/vinyl.resolver';
import { VinylUpdateComponent } from './pages/vinyl-update/vinyl-update.component';

const routes: Routes = [
    { path: 'list', component: VinylListComponent },
    { path: 'detail/:id', component: VinylDetailComponent, 
        resolve: {
            vinyl: VinylResolver
        } 
    },
    { path: 'update/:id', component: VinylUpdateComponent, 
        resolve: {
            vinyl: VinylResolver
        } 
    },
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