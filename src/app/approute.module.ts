import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './components/index.component';
import { ListComponent } from './components/list.component';
import { ItemdetailsComponent } from './components/itemdetails.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmComponent } from './components/film/film.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipComponent } from './components/starship/starship.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PlanetComponent } from './components/planet/planet.component';
import { NotesComponent } from './components/support/notes.component';
import { ErrorComponent } from './components/support/error.component';


const ROUTES: Routes = [
    { path: '', component: IndexComponent},
    { path: 'error', component: ErrorComponent},
    { path: 'list/:cat', component: ListComponent},
    { path: 'notes', component: NotesComponent},
    { path: 'details', component: ItemdetailsComponent,
    children: [
      { path: 'people/:item', component: PeopleComponent },
      { path: 'films/:item', component: FilmComponent },
      { path: 'species/:item', component: SpeciesComponent },
      { path: 'starships/:item', component: StarshipComponent },
      { path: 'vehicles/:item', component: VehicleComponent },
      { path: 'planets/:item', component: PlanetComponent }
    ]},
    { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(ROUTES)
    ],
    exports: [ RouterModule ]
  })

export class AppRouteModule {

}
