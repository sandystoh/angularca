import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from 'src/app/model';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['../itemdetails.component.css', './starship.component.css']
})

export class StarshipComponent implements OnInit {

  starship: Starship;
  imgUrl: any;
  item: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.params.item;
    this.imgUrl = './assets/images/starships/' + this.item + '.jpg';
    this.starWarsSvc.getStarship(this.item)
    .then(result => {
      this.starship = result;
   })
    .catch(error => {
      this.router.navigate(['/error']);
      console.error('ERROR: ', error);
   });
  }

  orderFilms(prop: string) {
    return this.starship.s_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}

