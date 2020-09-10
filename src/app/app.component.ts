import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>
    <!-- routes get injected -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-review';
}
