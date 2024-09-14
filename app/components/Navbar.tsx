"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  // ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Lorem</HoveredLink>
            <HoveredLink href="/">Ipsum</HoveredLink>
            <HoveredLink href="/">Dolor</HoveredLink>
            <HoveredLink href="/">Sit</HoveredLink>
            <HoveredLink href="/">Amet</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Lorem</HoveredLink>
            <HoveredLink href="/">Ipsum</HoveredLink>
            <HoveredLink href="/">Dolor</HoveredLink>
            <HoveredLink href="/">Sit</HoveredLink>
            <HoveredLink href="/">Amet</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Lorem</HoveredLink>
            <HoveredLink href="/">Ipsum</HoveredLink>
            <HoveredLink href="/">Dolor</HoveredLink>
            <HoveredLink href="/">Sit</HoveredLink>
            <HoveredLink href="/">Amet</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
