import type { MainNavItem, SiteMeta } from "@/types";

export interface SiteConfig {
  meta: SiteMeta,
  mainNav: MainNavItem[]
}


export const siteConfig:SiteConfig = {
  meta:{
    title: "Cebu United Car Campers | Adventure and Friendship Starts Out There",
    description: "Engage with local campers, share your experiences, and explore top camping spots in Cebu City. Friendly, supportive community.",
  },
  mainNav: [
    {slug:"trade-fair-campout", name: "Trade Fair Campout", path: "/trade-fair-campout",},
    {slug:"campfire-chronicles", name: "Campfire Chronicles", path: "/campfire-chronicles",},
    {slug:"unity-in-action", name: "Unity In Action", path: "/unity-in-action",},
    {slug:"about-us", name: "About Us", path: "/about-us",},
  ],
}