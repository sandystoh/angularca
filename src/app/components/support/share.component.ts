import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  @Input() category: string;
  @Input() text: string;
  @Input() itemID: number;
  showBtn = false;
  nav: any;

  constructor() { }

  ngOnInit() {
    this.nav = navigator;
    if (this.nav && this.nav.share) {
      this.showBtn = true;
    }
 }

 share() {
 if (this.nav && this.nav.share) {
    this.nav.share({
        title: 'Shared from the Star Wars Database',
        text:  this.text,
        url: 'https://sandystoh.github.io/angularca/details/' + this.category + '/' + this.itemID,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }

}

}
