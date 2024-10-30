import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JukeboxdAlbum } from './models/jukeboxd_album.model';
import { JukeboxdAlbumService } from './services/jukeboxd_album.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public albums: JukeboxdAlbum[] | undefined;

  constructor(private albumService: JukeboxdAlbumService) {}

  ngOnInit(): void {
      this.getAlbums();
  }

  public getAlbums(): void {
    this.albumService.getAlbums().subscribe(
      (response: JukeboxdAlbum[]) => {
        this.albums = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  title = 'jukeboxd-frontend';
}
