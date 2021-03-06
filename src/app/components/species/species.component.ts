import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Species } from 'src/app/model';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['../itemdetails.component.css', './species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Species;
  imgUrl: any;
  item: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.params.item;
    this.imgUrl = './assets/images/species/' + this.item + '.jpg';
    this.starWarsSvc.getSpecies(this.item)
    .then(result => {
      this.species = result;
   })
    .catch(error => {
      this.router.navigate(['/error']);
      console.error('ERROR: ', error);
   });
  }

  orderFilms(prop: string) {
    return this.species.s_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}

