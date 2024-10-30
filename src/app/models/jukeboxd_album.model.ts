export interface JukeboxdAlbum {
    albumId: number; // Optional for creating new albums
    title: string;
    artistId: number;
    artistName: string;
    description: string;
    releaseDate: string; // ISO date string (e.g., '1993-02-22')
    avgRating?: number; // Optional as it might not be set initially
    coverImageUrl?: string; // Optional in case no image is provided
    reviews?: number[]; // Array of review IDs
    trackList: string[]; // List of track names
    genres: string[]; // List of genre names
    spotifyUrl?: string; // Optional URL to Spotify
    createdDate?: string; // Optional for dates managed by the backend
    lastModifiedDate?: string; // Optional for dates managed by the backend
}