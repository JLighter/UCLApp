import { NgModule } from '@angular/core';
import { VinylService } from './services/vinyl.service';
import { UserService } from './services/user.service';

@NgModule({
  providers: [
    VinylService,
    UserService
  ]
})
export class CoreModule { }
