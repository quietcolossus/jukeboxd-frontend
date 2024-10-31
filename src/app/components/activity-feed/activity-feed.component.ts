import { Component, OnInit } from '@angular/core';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { JukeboxdAlbumService } from '../../services/jukeboxd_album.service';
import { JukeboxdAlbum } from '../../models/jukeboxd_album.model';
import { CommonModule } from '@angular/common';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css'],
  standalone: true,
  imports: [AlbumCardComponent, CommonModule]
})
export class ActivityFeedComponent implements OnInit {

    public albums$: Observable<JukeboxdAlbum[]> | undefined;

    constructor(private albumService: JukeboxdAlbumService) {}

    ngOnInit(): void {
        // Fetch and limit to first six albums
        this.albums$ = this.albumService.getAlbums().pipe(
          map(albums => albums.slice(0, 5)) // Slice to get the first six albums
        );
      }
}
