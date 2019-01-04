import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../starwars.service';
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

    constructor(private starWarsSvc: StarWarsService,
      private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      const ITEM = this.activatedRoute.snapshot.params.item;
      this.imgUrl = './assets/images/planets/' + ITEM + '.jpg';
      this.starWarsSvc.getPlanet(ITEM)
      .then(result => {
        this.planet = result;
     })
      .catch(error => {
        console.error('ERROR: ', error);
     });
    }

    orderFilms(prop: string) {
      return this.planet.p_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    }

  }
