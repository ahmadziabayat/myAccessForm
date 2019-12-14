import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  durationInSecond = 5;

  welcomeMessage: string = "Welcome to myAccess DEMO";

  /** matcher invoked error when invalid control is dirty, touched, or submitted */
  matcher = new MyErrorStateMatcher();

  constructor(private formbBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    /**name field only accept letter and digits and does not accept any especial character */
    this.myAccessForm = this.formbBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      address: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSave(formData) {
    if (this.myAccessForm.invalid) {
      return;
    }
    else if (this.myAccessForm.valid) {
      console.log(formData.value);
      this.openSnackBar();
    }

  };

  public hasError = (controlName: string, errorName: string) => {
    return this.myAccessForm.controls[controlName].hasError(errorName);
  };

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSecond * 1000,
    });
  }

}


@Component({
  selector: 'snack-bar-component',
  template: `<span class="saveMessage">
  Form Saved!!! 
</span>`,
  styles: [`
    .saveMessage {
      color: hotpink;
    }
  `],
})
export class SnackBarComponent { }