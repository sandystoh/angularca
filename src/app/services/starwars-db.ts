import Dexie from 'dexie';

export interface INote {
    id: number;
    category: string;
    itemID: number;
    comment: string;
}

export class StarWarsDb extends Dexie {
    notes: Dexie.Table<INote, string>;

    constructor() {
      super('starwarsDB');
      this.version(1).stores({
        notes: 'id++,category,itemID,comment'
      });
    }
  }
