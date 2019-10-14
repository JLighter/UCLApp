import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  vinyl = {
    title: 'Uprising',
    artist: 'Bob Marley',
    releaseDate: 1980,
    imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/4c/d7/12/1234764/1540-1/tsp20161011114552/Uprising.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
