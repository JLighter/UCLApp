import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinyl } from 'src/app/core/models/vinyl.model';
import { FormGroup } from '@angular/forms';
import { VinylService } from 'src/app/core/services/vinyl.service';

@Component({
  selector: 'app-vinyl-update',
  templateUrl: './vinyl-update.component.html',
  styleUrls: ['./vinyl-update.component.css']
})
export class VinylUpdateComponent implements OnInit {

  vinyl: Vinyl;

  error: any;

  constructor(
    private route: ActivatedRoute,
    private vinylService: VinylService,
    private router: Router
    ) {
    this.route.data.subscribe((data) => this.vinyl = data.vinyl);
  }

  ngOnInit() {
  }

  submit(form: FormGroup) {
    try {
      this.vinylService.updateOne(this.vinyl.id, this.vinyl);
      this.router.navigate(['vinyl', 'list']);
    } catch (e) {
      console.error(e);
      this.error = e;
    }
  }

}
