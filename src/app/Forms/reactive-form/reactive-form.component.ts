import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  rForm: FormGroup
  post: any
  name: string = ''
  description: string = ''

  constructor( private fb: FormBuilder) { 
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]) ]
    })
  }

  ngOnInit() {
  }

  onAddpost( value: any){
    this.name = value.name
    this.description = value.description
  }

  goBack(){
    this.name = ""
  }

}
// added a comment
