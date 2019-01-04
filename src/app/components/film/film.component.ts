import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['../itemdetails.component.css', './film.component.css']
})

export class FilmComponent implements OnInit {

  film: Film;
  filteredItem: any = {};
  imgUrl: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const ITEM = this.activatedRoute.snapshot.params.item;
    this.imgUrl = '../../../assets/images/films/' + ITEM + '.jpg';
    this.starWarsSvc.getFilm(ITEM)
    .then(result => {
      this.film = result;
   })
    .catch(error => {
      console.error('ERROR: ', error);
   });
  }

}
