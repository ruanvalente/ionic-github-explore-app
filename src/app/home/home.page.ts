import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hasError = false;
  search = '';
  github = null;

  searchControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log(this.search);
    this.search = '';
    this.http
      .get<any>('https://api.github.com/repos/angular/angular')
      .subscribe({
        next: (response) => (this.github = response),
      });
  }
}
