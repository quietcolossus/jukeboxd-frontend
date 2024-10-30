import { Injectable } from '@angular/core';
import { JukeboxdAlbum } from '../models/jukeboxd_album.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class JukeboxdAlbumService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getAlbums(): Observable<JukeboxdAlbum[]> {
        return this.http.get<JukeboxdAlbum[]>(`${this.apiServerUrl}/album/all`);
    }

    public addAlbum(album: JukeboxdAlbum): Observable<JukeboxdAlbum> {
        return this.http.post<JukeboxdAlbum>(`${this.apiServerUrl}/album/add`, album);
    }

    public updateAlbum(album: JukeboxdAlbum): Observable<JukeboxdAlbum> {
        return this.http.put<JukeboxdAlbum>(`${this.apiServerUrl}/album/update`, album);
    }

    public deleteAlbum(albumId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/album/delete/${albumId}`);
    }
}