import { Component } from '@angular/core';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-forms';

  constructor( public dialog: MatDialog, public snackBar: MatSnackBar) {}


  openDialoglogin():void 
  {
    const dialogRef = this.dialog.open(LoginDialogComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');});
  }
  onFormSubmit(value: any){
    console.log(value)
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
