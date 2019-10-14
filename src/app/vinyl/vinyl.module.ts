import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';

@NgModule({
  declarations: [
    VinylPreviewComponent
  ],
  exports: [
    VinylPreviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VinylModule { }
