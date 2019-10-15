import { Component, OnInit } from '@angular/core';
import { VinylService } from 'src/app/core/services/vinyl.service';
import { Vinyl } from 'src/app/core/models/vinyl.model';

@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.css']
})
export class VinylListComponent implements OnInit {

  vinyls: Vinyl[];

  constructor(private vinylService: VinylService) { }

  ngOnInit() {
    this.vinyls = this.vinylService.getAll()
  }

}
