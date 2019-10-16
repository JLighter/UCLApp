import { Injectable } from '@angular/core';
import { Vinyl } from '../models/vinyl.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class VinylService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Vinyl[]> {
    return this.http.get<Vinyl[]>(this.url + '/vinyls');
  }

  getOne(id: number): Observable<Vinyl> {
    if (id == null) throw Error('Need a non null id number')

    return this.http.get<Vinyl>(this.url + '/vinyls/' + id);
  }

  updateOne(id: number, updated: Vinyl): Observable<Vinyl> {
    if (id == null) throw Error('Need a non null id number')
    if (updated == null) throw Error('Need a non null vinyl object')

    return this.http.put<Vinyl>(this.url + '/vinyls/' + id, updated);
  }

  addOne(vinyl: Vinyl): Observable<Vinyl> {
    if (vinyl == null) throw Error('Need a non null vinyl object')

    return this.http.post<Vinyl>(this.url + '/vinyls', vinyl);
  }

  delete(id: number): any {
    if (id == null) throw Error('Need a non null id number')

    return this.http.delete<any>(this.url + '/vinyls/' + id);
  }

}
