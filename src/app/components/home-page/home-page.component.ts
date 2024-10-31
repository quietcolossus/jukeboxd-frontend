import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true
})
export class HomePageComponent {
  userName = 'Bacchus'; // Example data, replace with actual user data
}
