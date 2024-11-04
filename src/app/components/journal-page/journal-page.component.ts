// src/app/journal/journal-page.component.ts
import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';

@Component({
  selector: 'app-journal-page',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent {}