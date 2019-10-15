import { Component, OnInit } from '@angular/core';
import { VinylService } from './core/services/vinyl.service';
import { Vinyl } from './core/models/vinyl.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-app';

  vinyls: Vinyl[];

  constructor(private vinylService: VinylService) {}

  ngOnInit() {
    this.vinyls = this.vinylService.getAll();
  }

  onClickVinylButton(vinyl) {
    console.log(vinyl);
  }

}
