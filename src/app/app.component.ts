import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  bmVinyl = {
    title: 'Uprising',
    artist: 'Bob Marley',
    releaseDate: 1980,
    imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/4c/d7/12/1234764/1540-1/tsp20161011114552/Uprising.jpg'
  }

  mjVinyl = {
    title: 'Thriller',
    artist: 'Michael Jackson',
    releaseDate: 1980,
    imageUrl: 'https://i.pinimg.com/originals/47/6d/37/476d37cdb71c6d856ff0d42a65f97b28.jpg'
  }

}
