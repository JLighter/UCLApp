import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';
import { VinylListComponent } from './pages/vinyl-list/vinyl-list.component';
import { VinylDetailComponent } from './pages/vinyl-detail/vinyl-detail.component';
import { VinylRoutingModule } from './vinyl-routing.module';
import { VinylResolver } from './resolvers/vinyl.resolver';

@NgModule({
  declarations: [
    VinylPreviewComponent,
    VinylListComponent,
    VinylDetailComponent
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
