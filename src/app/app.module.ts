import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule} from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HeaderComponent,
    LoginDialogComponent,
    
  ],
  entryComponents:[  LoginDialogComponent ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatDialogModule, MatDatepickerModule, MatTabsModule, MatSnackBarModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
