import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinyl } from 'src/app/core/models/vinyl.model';
import { VinylService } from 'src/app/core/services/vinyl.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vinyl-detail',
  templateUrl: './vinyl-detail.component.html',
  styleUrls: ['./vinyl-detail.component.css']
})
export class VinylDetailComponent implements OnInit {

  vinyl$: Observable<Vinyl>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.vinyl$ = this.route.data.pipe(
      map(data => data.vinyl)
    );
  }

  ngOnInit() {}

}
