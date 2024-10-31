import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
  standalone: true
})
export class AlbumCardComponent {
  @Input() album: any;
}