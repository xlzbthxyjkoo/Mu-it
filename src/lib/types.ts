export interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  price: string;
  releaseDate?: string;
}

export interface ChartAlbum extends Album {
  rank: number;
}

export interface UpcomingAlbum extends Album {
  releaseDate: string;
}
