// src/app/home/home-page.component.ts
import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';

@Component({
  selector: 'app-albums-page',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent {}