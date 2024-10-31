import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css'],
  standalone: true
})
export class WelcomeBannerComponent {
  userName = 'Bacchus'; // Example data, replace with actual user data
}
