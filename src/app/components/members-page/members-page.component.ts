// src/app/home/home-page.component.ts
import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';

@Component({
  selector: 'app-members-page',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent {}