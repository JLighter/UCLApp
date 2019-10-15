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
    private route: ActivatedRoute,
    private vinylService: VinylService,
    private router: Router
  ) {
    this.route.data.subscribe((params) => {
      try {
        this.vinyl = this.vinylService.getOne(+params.id);
      } catch(e) {
        this.router.navigate(['not-found']);
      }
    });
  }

  ngOnInit() {}

}
