import { Component, OnInit } from '@angular/core';
import { Ibook } from '../ibook';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {
    this.openingTime = new Date();
    this.openingTime.setHours(10, 0);
    this.closingTime = new Date();
    this.closingTime.setHours(15, 0);
  }

  ngOnInit() {
  }
  pageTitle: string = 'My Collections'
  books: Array<Ibook> =
  [
    {
      id: 1,
      title: "JavaScript - The Good Parts",
      author: "Douglas Crockford",
      isCheckedOut: true,
      rating: 3
    },
    {
      id: 2,
      title: "The Wind in the Willows",
      author: "Kenneth Grahame",
      isCheckedOut: false,
      rating: 4
    },
    {
      id: 3,
      title: "Pillars of the Earth",
      author: "Ken Follett",
      isCheckedOut: true,
      rating: 5
    },
    {
      id: 4,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      isCheckedOut: false,
      rating: 5
    }
  ];
  showOperatingHours: boolean = false;
  openingTime: Date;
  closingTime: Date;


  updateMessage(message: string, type: string): void {
    if (message) {
      this._snackBar.open(`${type}: ${message}`, 'DISMISS', {
        duration: 3000
      });
    }
  }

  onRatingUpdate(book: Ibook): void {
    this.updateMessage(book.title, " Rating has been updated");
  }
}
