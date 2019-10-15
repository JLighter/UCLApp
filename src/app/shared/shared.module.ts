import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './components/counting-buttons/counting-buttons.component';
import { MyUppercasePipe } from './pipes/my-uppercase/my-uppercase.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CountingButtonsComponent,
    MyUppercasePipe,
    HeaderComponent
  ],
  exports: [
    CountingButtonsComponent,
    MyUppercasePipe,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
