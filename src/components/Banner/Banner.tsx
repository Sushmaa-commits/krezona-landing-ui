import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="mb-[150px] relative mt-[20px] md:mt-[0px]">
      <div className=" mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-[40%] ">
          <h1 className="text-[24px] md:text-5xl font-bold text-black mb-3 md:mb-7 tracking-[2%] leading-[28px]">
            Your Partner at Disability
          </h1>
          <p className="text-[16px] md:text-lg md:max-w-fit text-black tracking-[2%] mb:[14px] mb-8">
            Impact care seeks to provide good quality services for people with
            disabilities, ensuring that their individual requirements are met.
          </p>
          <Button size="lg">Book an Appointment</Button>
        </div>
        <Image
          src="/assets/images/helpinghands.svg"
          alt="helping-hand"
          className=" hidden md:block absolute bottom-0 "
          height={703}
          width={1076}
        />
        <div className="hidden md:block">
          <Image
            src="/assets/images/banner.png"
            alt="Banner Image"
            height={554}
            width={554}
          />
        </div>
        <div className="block md:hidden mt-[36px] px-[25px]">
          <Image
            src="/assets/images/mobile-banner.png"
            alt="Banner Image"
            height={554}
            width={554}
          />
        </div>
      </div>
    </section>
  );
}
