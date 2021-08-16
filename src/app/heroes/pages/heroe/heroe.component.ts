import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activadedRoute: ActivatedRoute,
                private heroesService: HeroesService,
                private router: Router ) { }

  ngOnInit(): void {

    this.activadedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroesPorId( id ) )
      )
      .subscribe( heroe => this.heroe = heroe );

  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
