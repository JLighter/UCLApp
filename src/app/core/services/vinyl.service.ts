import { Injectable } from '@angular/core';
import { Vinyl } from '../models/vinyl.model';

@Injectable()
export class VinylService {

  private vinyls: Vinyl[] = [
    {
      id: 0,
      title: 'Uprising',
      artist: 'Bob Marley',
      releaseDate: new Date('June 10, 1980 00:00:00'),
      imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/4c/d7/12/1234764/1540-1/tsp20161011114552/Uprising.jpg'
    },
    {
      id: 1,
      title: 'Thriller',
      artist: 'Michael Jackson',
      releaseDate: new Date('November 30, 1982 00:00:00'),
      imageUrl: 'https://i.pinimg.com/originals/47/6d/37/476d37cdb71c6d856ff0d42a65f97b28.jpg'
    }
  ]

  constructor() {
    console.log('Construct VinylService')
  }

  getAll(): Vinyl[] {
    // Send a copy of vinyls
    return this.vinyls.slice(0);
  }

  getOne(id: number): Vinyl {
    if (id == null) throw Error('Need a non null id number')

    return this.vinyls.find((vinyl) => vinyl.id === id);
  }

  updateOne(id: number, updated: Vinyl) {
    if (id == null) throw Error('Need a non null id number')
    if (updated == null) throw Error('Need a non null vinyl object')

    this.vinyls = this.vinyls.map((vinyl) => {
      return vinyl.id === id ? updated : vinyl;
    })
  }

  addOne(vinyl: Vinyl) {
    if (vinyl == null) throw Error('Need a non null vinyl object')

    return this.vinyls.push(vinyl);
  }

  delete(id: number) {
    if (id == null) throw Error('Need a non null id number')

    this.vinyls = this.vinyls.filter((vinyl) => vinyl.id !== id);
  }

}
