import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';

import {
  MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule,
  MatIconModule, MatInputModule, MatSnackBarModule, MatTabsModule,
  MatButtonModule, MatLineModule, MatToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingCategoryPipe } from './pipes/rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { HttpModule } from '@angular/http';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGuardService } from './guards/book-guard.service';
import { DataService } from './services/data.service';
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent,
    NewBookComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatLineModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [BookGuardService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    NewBookComponent
  ]
})
export class AppModule { }
