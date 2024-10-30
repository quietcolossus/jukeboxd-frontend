// src/app/components/app-header/app-header.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  standalone: true
})
export class AppHeaderComponent implements OnInit {
  // Placeholder for user data, this can be replaced with actual data from a service later
  userName: string = 'Bacchus';
  profilePicUrl: string = 'assets/profile-pic.png';

  constructor() {}

  ngOnInit(): void {
    // Here, you could fetch user data if it were dynamic, e.g., from a user service
    // For now, we're just using static values as placeholders
  }

  // Placeholder method to log out, navigate, or interact with the user profile
  onProfileClick(): void {
    console.log('Profile clicked');
  }
}
