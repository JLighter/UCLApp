import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  @Input() vinyl: any;

  constructor() { }

  ngOnInit() {
  }

  changeReleaseDate() {
    this.vinyl.releaseDate += 1;
  }

}
