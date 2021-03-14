import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showLoader = false;
  public showMail = false;
  form = new FormGroup({
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])

  });
  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showMail = true;
      this.showLoader = false;
      setTimeout(() => {
        this.showMail = false;
        this.resetBtn();
      }, 5000);
    }, 7000);
  }
  resetBtn() {
    this.form.reset();
  }
}
