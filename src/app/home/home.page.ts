import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hasError = false;
  search = '';

  searchControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor() {}

  onSubmit() {
    console.log(this.search);
    this.search = '';
  }
}
