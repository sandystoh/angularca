import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarWarsService } from '../starwars.service';
import { List, People } from '../model';

const SWAPI = 'https://swapi.co/api/';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  list: List[] = [];
  items: Object[] = [];
  category: string;

  constructor(private starWarsSvc: StarWarsService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const CATEGORY = this.activatedRoute.snapshot.params.cat;
    this.category = CATEGORY.toUpperCase();
    if (this.category === 'PEOPLE') { this.category = 'CHARACTERS'; }
    this.getList(SWAPI + CATEGORY);
  }

  getList(api) {
    this.starWarsSvc.getList(api)
      .then(result => {
        console.log('Listm: ', result);
          this.list = result;
          this.items = this.list['results'];
      })
      .catch(error => {
        console.error('ERROR: ', error);
     });
  }

  getDetails(url: string) {
    const CATEGORY = url.split('/')[4];
    const ITEM = url.split('/')[5];
    console.log(CATEGORY);
    console.log(ITEM);
    this.router.navigate(['/details/', CATEGORY, ITEM ]);
  }

  goPrevious() {
    const prevurl = this.list['previous'];
    console.log(prevurl);
    if (prevurl != null) {
        this.getList(prevurl);
    }
  }

  goNext() {
    const nexturl = this.list['next'];
    console.log(nexturl);
    if (nexturl != null) {
        this.getList(nexturl);
    }
  }

  goBack() {
    window.history.back();
  }

}
