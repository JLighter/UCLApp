import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinyl } from 'src/app/core/models/vinyl.model';
import { FormGroup } from '@angular/forms';
import { VinylService } from 'src/app/core/services/vinyl.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vinyl-update',
  templateUrl: './vinyl-update.component.html',
  styleUrls: ['./vinyl-update.component.css']
})
export class VinylUpdateComponent implements OnInit {

  vinyl$: Observable<Vinyl>;

  error: any;

  constructor(
    private route: ActivatedRoute,
    private vinylService: VinylService,
    private router: Router
  ) {

    this.vinyl$ = this.route.data.pipe(
      map((data) => data.vinyl)
    )

  }

  ngOnInit() {
  }

  submit(form: FormGroup) {
    this.vinyl$.pipe(
      map((vinyl) => ({
        id: vinyl.id,
        title: form.controls.title.value,
        artist: form.controls.artist.value,
        imageUrl: form.controls.imageUrl.value,
        releaseDate: form.controls.releaseDate.value,
      })),
      switchMap((vinyl) => this.vinylService.updateOne(vinyl.id, vinyl)),
    )
    .subscribe((vinyl) => {
      this.router.navigate(['vinyl', 'list'])
    }, (error) => {
      console.error(error);
    })
  }

}
