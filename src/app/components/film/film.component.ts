import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/starwars.service';
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
  item: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.params.item;
    this.imgUrl = './assets/images/films/' + this.item + '.jpg';
    this.starWarsSvc.getFilm(this.item)
    .then(result => {
      this.film = result;
   })
    .catch(error => {
      this.router.navigate(['/error']);
      console.error('ERROR: ', error);
   });
  }

}
