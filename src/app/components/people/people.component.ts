import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from 'src/app/model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['../itemdetails.component.css', './people.component.css']
})
export class PeopleComponent implements OnInit {

  char: People;
  imgUrl: any;
  item: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.params.item;
    this.imgUrl = './assets/images/people/' + this.item + '.jpg';

    this.starWarsSvc.getPerson(this.item)
    .then(result => {
      this.char = result;
   })
    .catch(error => {
      this.router.navigate(['/error']);
      console.error('ERROR: ', error);
   });
  }

  orderFilms(prop: string) {
    return this.char.p_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
