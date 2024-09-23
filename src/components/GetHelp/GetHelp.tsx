import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function GetHelp() {
  return (
    <div className="hidden lg:block fixed right-[60px] top-[50%]">
      <Button className="rounded-full h-20 w-20 p-0 bg-transparent">
        <Image
          src="/assets/images/get-help.svg"
          alt="contact to get help"
          width={32}
          height={32}
          className="h-full w-full"
        />
      </Button>
    </div>
  );
}

export default GetHelp;
