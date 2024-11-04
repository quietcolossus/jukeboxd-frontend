// src/app/home/home-page.component.ts
import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {}