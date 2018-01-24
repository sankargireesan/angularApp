import { Component, OnInit } from '@angular/core';
import { Ibook } from '../ibook';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs/Subject';
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
    this._dataService.search(this.searchTerm$)
      .subscribe(books => {
        this.books = books;
      });
  }
  pageTitle: string = 'My Collections'
  books: Array<Ibook>;
  showOperatingHours: boolean = false;
  openingTime: Date;
  closingTime: Date;
  searchTerm$ = new Subject<string>();

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

  getBooks(): void {
    this._dataService.getBooks().subscribe(
      books => this.books = books,
      error => this.updateMessage(<any>error, 'ERROR'));
  }
}
