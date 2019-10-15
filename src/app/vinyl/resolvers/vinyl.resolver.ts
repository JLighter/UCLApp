import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vinyl } from 'src/app/core/models/vinyl.model';
import { VinylService } from 'src/app/core/services/vinyl.service';


@Injectable()
export class VinylResolver implements Resolve<Vinyl> {

    constructor(
        private vinylService: VinylService,
        private router: Router
    ) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vinyl> | Promise<Vinyl> | Vinyl {
        
        const id  = +route.params.id;

        try {
            return this.vinylService.getOne(id);
        } catch(e) {
            this.router.navigate(['not-found']);
        }

    }

}