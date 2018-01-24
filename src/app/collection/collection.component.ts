import { Component, OnInit } from '@angular/core';
import { Ibook } from '../ibook';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _dataService: DataService) {
    this.openingTime = new Date();
    this.openingTime.setHours(10, 0);
    this.closingTime = new Date();
    this.closingTime.setHours(15, 0);
  }

  ngOnInit() {
    this.books = this._dataService.getBooks();
  }
  pageTitle: string = 'My Collections'
  books: Array<Ibook>;
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
