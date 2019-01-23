import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/starwars.service';
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
  item: any;

  constructor(private starWarsSvc: StarWarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.params.item;
    this.imgUrl = './assets/images/vehicles/' + this.item + '.jpg';
    this.starWarsSvc.getVehicle(this.item)
    .then(result => {
      this.vehicle = result;
   })
    .catch(error => {
      this.router.navigate(['/error']);
      console.error('ERROR: ', error);
   });
  }

  orderFilms(prop: string) {
    return this.vehicle.v_films.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}

