import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm, } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  regiForm: FormGroup;
  loginForm: FormGroup;
  username: string = '';
  public loginMsg: string;
  //password:string='';
  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  userId: string = '';
  password: string = '';
  status: string = '';
  role: string = '';
  securityQ: string = '';
  securityA: string = '';
  companyName: string = '';
  companyAddress: string = '';
  companyPhone: string = '';
  // public allUsers: G9IPUser[];
  public userMsg: string;
  // public userCred: logUser;
  forgotForm: FormGroup;
  newPassword: string = '';
  public userrMsg: string;

  constructor(private fb: FormBuilder, public dialog: MatDialog, public snackBar: MatSnackBar) {  }

 ngOnInit() {
    this.createewUserForm();
    this.createLoginForm();
    this.createResetPasswordForm();
  }
  private createewUserForm() {
    this.regiForm = this.fb.group({
      'username': [null, Validators.required],
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'dob': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")])],
      'address': [null, Validators.required],
      'userId': [null, Validators.required],
      'password': [null, Validators.required],
      'status': [null, Validators.required],
      'role': [null, Validators.required],
      'securityQ': [null, Validators.required],
      'securityA': [null, Validators.required],
      'companyName': [null, Validators.required],
      'companyAddress': [null, Validators.required],
      'companyPhone': [null, Validators.required],
    });

  }
  private createLoginForm() {
    this.loginForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  private createResetPasswordForm() {
    this.forgotForm = this.fb.group({
      'userId': [null, Validators.required],
      'securityQ': [null, Validators.required],
      'securityA': [null, Validators.required],
      'dateOfBirth': [null, Validators.required],
      'newPassword': [null, Validators.required],

    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  private outLog(msg: string) {
    console.log('login-component: ' + msg);
  }
}
