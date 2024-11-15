import type { MainNavItem } from "@/types";

export interface SiteConfig {
  mainNav: MainNavItem[]
}


export const siteConfig:SiteConfig = {
  mainNav: [
    {slug:"trade-fair-campout", name: "Trade Fair Campout", path: "/trade-fair-campout",},
    {slug:"campfire-chronicles", name: "Campfire Chronicles", path: "/campfire-chronicles",},
    {slug:"unity-in-action", name: "Unity In Action", path: "/unity-in-action",},
    {slug:"about-us", name: "About Us", path: "/about-us",},
  ],
}