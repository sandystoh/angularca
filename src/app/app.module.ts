import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRouteModule } from './approute.module';
import { ListComponent } from './components/list.component';
import { StarWarsService } from './services/starwars.service';
import { IndexComponent } from './components/index.component';
import { ItemdetailsComponent } from './components/itemdetails.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmComponent } from './components/film/film.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipComponent } from './components/starship/starship.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PlanetComponent } from './components/planet/planet.component';
import { DexieService } from './services/dexie.service';
import { NotesComponent } from './components/support/notes.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/support/error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareComponent } from './components/support/share.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    IndexComponent,
    ItemdetailsComponent,
    PeopleComponent,
    FilmComponent,
    SpeciesComponent,
    StarshipComponent,
    VehicleComponent,
    PlanetComponent,
    NotesComponent,
    ErrorComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule, AppRouteModule, HttpClientModule, MaterialModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ StarWarsService, DexieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
