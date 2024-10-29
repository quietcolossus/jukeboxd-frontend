import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JukeboxdAlbum } from './jukeboxd_album';
import { JukeboxdAlbumService } from './jukeboxd_album.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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
