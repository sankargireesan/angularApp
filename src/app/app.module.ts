import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';

import  {
    MatListModule,  MatCardModule,  MatSlideToggleModule,  MatDialogModule,
    MatIconModule,  MatInputModule,  MatSnackBarModule,  MatTabsModule,
    MatButtonModule,  MatLineModule,  MatToolbarModule
}  from  '@angular/material';
import  {  BrowserAnimationsModule  }  from  '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AboutComponent
  ],
  imports:  [
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
