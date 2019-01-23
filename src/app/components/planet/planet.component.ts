import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['../itemdetails.component.css', './planet.component.css']
})
export class PlanetComponent implements OnInit {

    planet: Planet;
    imgUrl: any;
    item: any;

    constructor(private starWarsSvc: StarWarsService,
      private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.item = this.activatedRoute.snapshot.params.item;
      this.imgUrl = './assets/images/planets/' + this.item + '.jpg';
      this.starWarsSvc.getPlanet(this.item)
      .then(result => {
        this.planet = result;
     })
      .catch(error => {
        this.router.navigate(['/error']);
        console.error('ERROR: ', error);
     });
    }

    orderFilms(prop: string) {
      return this.planet.p_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    }

  }
