import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

export interface LinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const Link: React.FC<LinkProps> = ({ href, target, children, ...props }) => {
  return (
    <Button {...props} asChild>
      <a href={href} target={target}>
        {children}
      </a>
    </Button>
  );
};

export { Link };
