import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './components/counting-buttons/counting-buttons.component';
import { MyUppercasePipe } from './pipes/my-uppercase/my-uppercase.pipe';



@NgModule({
  declarations: [
    CountingButtonsComponent,
    MyUppercasePipe
  ],
  exports: [
    CountingButtonsComponent,
    MyUppercasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
