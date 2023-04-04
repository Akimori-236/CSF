import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day36-routing';

  constructor(private router: Router) { }

  // click calls this function to redirect to /dog
  // alternate way compared to [routerLink]
  // allows for computation before redirecting
  goToDog() {
    // some calculations...
    this.router.navigate(['/dog'])
  }
}
