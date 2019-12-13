import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-my-access-form',
  templateUrl: './my-access-form.component.html',
  styleUrls: ['./my-access-form.component.scss']
})
export class MyAccessFormComponent implements OnInit {
  myAccessForm: FormGroup;

  submitted = false;
  success = false;
  status: string;

  /** matcher invoked error when invalid control is dirty, touched, or submitted */
  matcher = new MyErrorStateMatcher();

  constructor( private formbBuilder: FormBuilder) { 
    this.myAccessForm = this.formbBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSave(formData){
    this.submitted = true;
    if(this.myAccessForm.invalid){
      return;
    }
    else if(this.myAccessForm.valid){
      console.log(formData.value);
      this.success = true;
    }
  
  };

  public hasError = (controlName: string, errorName: string) =>{
    return this.myAccessForm.controls[controlName].hasError(errorName);
  };

  getStatus(){
    this.status = this.myAccessForm.status;
  }



}
