import { Component, OnInit, Input } from '@angular/core';
import { DexieService } from 'src/app/services/dexie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() category: string;
  @Input() itemID: number;
  notes: any;
  personNotes: any;
  comment: any;

  constructor(private db: DexieService) { }

  ngOnInit() {
    // this.db.getAll().then(data => { this.notes = data; });
    this.updateComments();
  }

  onKey(event) {
    this.comment = event.target.value;
  }

  addComment()  {
    console.log(this.comment);
    this.db.add({ category: this.category, itemID: this.itemID, comment: this.comment });
    this.comment = '';
    this.updateComments();
  }

  deleteComment(id) {
    this.db.remove(id);
    this.updateComments();

  }

  updateComments() {
    this.db.getComments(this.category, this.itemID).then( data => { this.personNotes = data; });
  }

}
