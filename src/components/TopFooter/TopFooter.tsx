import { Button } from "@/components/ui/button";
import React from "react";

export default function TopFooter() {
  return (
    <div className="flex flex-col gap-5 mb-3 mt-10 lg:mt-16 lg:mb-[73px] items-center justify-center ">
      <div className="flex text-center  items-center justify-center w-[791px] mb-[22px]">
        <h2 className="text-2xl max-w-[315px] lg:max-w-[790px] leading-[32px] lg:leading-[52px] lg:text-[40px] font-[600] text-black   ">
          Overcome Ignorance and Fight for Equality
        </h2>
      </div>

      <div className="flex gap-2 lg:gap-6">
        <Button size="lg"> Book an Appointment</Button>
        <Button variant="outline" size="lg" className="text-black border-black">
          Refer Someone
        </Button>
      </div>
    </div>
  );
}
