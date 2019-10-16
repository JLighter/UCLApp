import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './components/counting-buttons/counting-buttons.component';
import { MyUppercasePipe } from './pipes/my-uppercase/my-uppercase.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContainsDirective } from './directives/contains.directive';

@NgModule({
  declarations: [
    CountingButtonsComponent,
    MyUppercasePipe,
    HeaderComponent,
    ContainsDirective
  ],
  exports: [
    CountingButtonsComponent,
    MyUppercasePipe,
    HeaderComponent,
    ContainsDirective,
    FormsModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
