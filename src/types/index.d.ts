export interface BasicImageMeta {
  path: string;
  alt: string;
  aspect: "square" | "video";
}

export interface OutreachEvent {
  year: string;
  name: string;
  location: string;
  isDoneEvent: boolean;
  eventDate: Date;
  videoEmbedUrl?: string | null;
  photoAlbumUrl?: string | null;
  previewPhotos?: BasicImageMeta[] | null;
}