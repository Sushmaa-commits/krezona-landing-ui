import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

function MobileNav() {
  return (
    <header className="h-[24px] flex md:hidden max-w-screen justify-end">
      <Button variant="ghost" className="text-black">
        <HamburgerMenuIcon />
      </Button>
    </header>
  );
}

export default MobileNav;
