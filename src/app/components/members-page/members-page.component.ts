import { Component } from '@angular/core';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css'],
  standalone: true
})
export class MembersPageComponent {
  userName = 'Bacchus'; // Example data, replace with actual user data
}
