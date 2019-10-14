import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VinylPreviewComponent
  ],
  exports: [
    VinylPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class VinylModule { }
