import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [
    {
      title: 'Procurar repositório',
      url: '/search',
      icon: 'search',
    },
  ];

  selectedPage = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPage = event.url;
    });
  }
}
