import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { StarWarsDb } from './starwars-db';

@Injectable()
export class DexieService {

    db: any;

    constructor() {
        this.db = new StarWarsDb();
    }

    getAll() {
        return this.db.notes.toArray();
      }

    getComments(category, itemID) {
        return this.db.notes.where({category: category, itemID: itemID}).reverse().sortBy('id');
    }

    add(data) {
    return this.db.notes.add(data);
    }

    update(id, data) {
    return this.db.notes.update(id, data);
    }

    remove(id) {
    return this.db.notes.delete(id);
    }
  }


