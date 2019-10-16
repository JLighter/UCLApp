import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';
import { VinylListComponent } from './pages/vinyl-list/vinyl-list.component';
import { VinylDetailComponent } from './pages/vinyl-detail/vinyl-detail.component';
import { VinylRoutingModule } from './vinyl-routing.module';
import { VinylResolver } from './resolvers/vinyl.resolver';
import { VinylUpdateComponent } from './pages/vinyl-update/vinyl-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VinylPreviewComponent,
    VinylListComponent,
    VinylDetailComponent,
    VinylUpdateComponent
  ],
  providers: [
    VinylResolver
  ],
  exports: [
    VinylPreviewComponent
  ],
  imports: [
    CommonModule,
    VinylRoutingModule,
    SharedModule
  ]
})
export class VinylModule { }
