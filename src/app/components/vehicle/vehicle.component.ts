import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle} from 'src/app/model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['../itemdetails.component.css', './vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: Vehicle;
  imgUrl: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const ITEM = this.activatedRoute.snapshot.params.item;
    this.imgUrl = '../../../assets/images/vehicles/' + ITEM + '.jpg';
    this.starWarsSvc.getVehicle(ITEM)
    .then(result => {
      this.vehicle = result;
   })
    .catch(error => {
      console.error('ERROR: ', error);
   });
  }

  orderFilms(prop: string) {
    return this.vehicle.v_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}

