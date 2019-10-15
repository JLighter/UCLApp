import { Component } from '@angular/core';
import { VinylService } from './core/services/vinyl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  constructor(private vinylService: VinylService) {
    console.log('use vinyl service in app', vinylService);
  }

  onClickVinylButton(vinyl) {
    console.log(vinyl);
  }

}
