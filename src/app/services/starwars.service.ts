import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List, People, Film, Species, Planet, Starship, Vehicle } from '../model';

const SWAPI = 'https://swapi.co/api/';

@Injectable()
export class StarWarsService {

    constructor(private http: HttpClient) { }

    getList(API_URL): Promise<List[]> {
        return (
            this.http.get<List[]>(API_URL)
            .toPromise()
            .then(result => {
                return (result);
            })
        );
    }

    getPerson(ITEM: any): Promise<People> {
        return (
            this.http.get<People>(SWAPI + 'people/' + ITEM)
            .toPromise()
            .then(result => {
                this.readPlanet(result.homeworld).then(ret => {
                    result.p_homeworld = ret; });

                result.p_species = this.readSpecies(result.species);
                result.p_films = this.readFilms(result.films);
                result.p_starships = this.readStarShips(result.starships);
                result.p_vehicles = this.readVehicles(result.vehicles);
                console.log('peopleresult', result);
                return (result);
            })
        );
    }

    getFilm(ITEM: any): Promise<Film> {
        return (
            this.http.get<Film>(SWAPI + 'films/' + ITEM)
            .toPromise()
            .then(result => {
                result.f_characters = this.readPeople(result.characters);
                result.f_planets = this.readPlanets(result.planets);
                result.f_species = this.readSpecies(result.species);
                result.f_starships = this.readStarShips(result.starships);
                result.f_vehicles = this.readVehicles(result.vehicles);
                console.log('filmresult', result);
                return (result);
            })
        );
    }

    getSpecies(ITEM: any): Promise<Species> {
        return (
            this.http.get<Species>(SWAPI + 'species/' + ITEM)
            .toPromise()
            .then(result => {
                this.readPlanet(result.homeworld).then(ret => {
                    result.s_homeworld = ret; });

                result.s_films = this.readFilms(result.films);
                result.s_people = this.readStarShips(result.people);
                console.log('speciesresult', result);
                return (result);
            })
        );
    }

    getStarship(ITEM: any): Promise<Starship> {
        return (
            this.http.get<Starship>(SWAPI + 'starships/' + ITEM)
            .toPromise()
            .then(result => {
                result.s_films = this.readFilms(result.films);
                result.s_pilots = this.readStarShips(result.pilots);
                console.log('starshipresult', result);
                return (result);
            })
        );
    }

    getVehicle(ITEM: any): Promise<Vehicle> {
        return (
            this.http.get<Vehicle>(SWAPI + 'vehicles/' + ITEM)
            .toPromise()
            .then(result => {
                result.v_films = this.readFilms(result.films);
                result.v_pilots = this.readStarShips(result.pilots);
                console.log('vehicleresult', result);
                return (result);
            })
        );
    }

    getPlanet(ITEM: any): Promise<Planet> {
        return (
            this.http.get<Planet>(SWAPI + 'planets/' + ITEM)
            .toPromise()
            .then(result => {
                result.p_films = this.readFilms(result.films);
                result.p_residents = this.readStarShips(result.residents);
                console.log('planetresult', result);
                return (result);
            })
        );
    }

    readPeople(peopleArray) {
        const people = [];
        for (const p of peopleArray) {
            this.http.get<People>(p)
            .toPromise().then (ret => {
                people.push(ret);
            });
        }
        return people;
    }

    readSpecies(speciesArray) {
        const species = [];
        for (const s of speciesArray) {
            this.http.get<Species>(s)
            .toPromise().then (ret => {
                species.push(ret);
            });
        }
        return species;
    }

    readFilms(filmArray) {
        const films = [];
        for (const f of filmArray) {
            this.http.get<Film>(f)
            .toPromise().then (ret => {
                films.push(ret);
            });
        }
        return films;
    }

    readStarShips(starshipArray) {
        const starships = [];
        for (const st of starshipArray) {
            this.http.get<Starship>(st)
            .toPromise().then (ret => {
                starships.push(ret);
            });
        }
        return starships;
    }

    readVehicles(vehicleArray) {
        const vehicles = [];
        for (const vh of vehicleArray) {
            this.http.get<Vehicle>(vh)
            .toPromise().then (ret => {
                vehicles.push(ret);
            });
        }
        return vehicles;
    }

    readPlanet(planet) {
        return (
            this.http.get<Planet>(planet)
            .toPromise()
            .then(result => {
                return (result);
            })
        );
    }

    readPlanets(planetArray) {
        const planets = [];
        for (const pl of planetArray) {
            this.http.get<Planet>(pl)
            .toPromise().then (ret => {
                planets.push(ret);
            });
        }
        return planets;
    }
}
