import type { ReactElement } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/Link";

import type { NavLinkKey } from "@/types";

import { siteConfig } from "@/config/site";
import {
  MenuIcon,
  FlameKindling,
  HeartHandshake,
  Tent,
  Store,
} from "lucide-react";

function getNavLinkIcon(key: NavLinkKey): ReactElement {
  const icons = {
    "trade-fair-campout": <Store />,
    "campfire-chronicles": <FlameKindling />,
    "unity-in-action": <HeartHandshake />,
    "about-us": <Tent />,
  };

  return icons[key];
}

export interface MobileNavProps {
  currentPath?: string;
}
const MobileNav: React.FC<MobileNavProps> = ({ currentPath }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <MenuIcon />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <section className="overflow-auto p-6">
          <ul className="flex flex-col space-y-3">
            {siteConfig.mainNav.map((link) => {
              const linkPath = link.path.split("/")[1];
              const isCurrentPath = currentPath === linkPath;
              return (
                <li>
                  <Link
                    variant="ghost"
                    className={`
                      ${isCurrentPath ? "text-brand-color" : "text-slate-600"}
                      ~/lg:~text-base/xl
                      `}
                    href={link.path}
                  >
                    {getNavLinkIcon(link.slug)}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </DrawerContent>
    </Drawer>
  );
};

export { MobileNav };
