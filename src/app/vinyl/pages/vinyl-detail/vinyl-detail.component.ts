import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinyl } from 'src/app/core/models/vinyl.model';
import { VinylService } from 'src/app/core/services/vinyl.service';

@Component({
  selector: 'app-vinyl-detail',
  templateUrl: './vinyl-detail.component.html',
  styleUrls: ['./vinyl-detail.component.css']
})
export class VinylDetailComponent implements OnInit {

  vinyl: Vinyl;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      this.vinyl = data.vinyl;
    })
  }

  ngOnInit() {}

}
