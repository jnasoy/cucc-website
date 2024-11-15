import type { ReactElement } from "react";

export type NavLinkKey = "trade-fair-campout" | "campfire-chronicles" | "unity-in-action" | "about-us";

export interface SiteMeta {
  title?: string;
  description?: string;
}
export interface MainNavItem {
  slug: NavLinkKey;
  name: string;
  path: string;
}
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