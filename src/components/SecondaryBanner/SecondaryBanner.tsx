import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SecondaryBanner() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
      <div>
        <h1 className="text-[28px] font-bold text-black mb-3 lg:mb-[20px] tracking-[2%] leading-[32px]">
          Empowering Independence, Together
        </h1>

        <p className="text-lg text-black mb-0 lg:mb-[55px] leading-6 tracking-[2%] ">
          Impact care seeks to provide good quality services for people with
          disabilities,
        </p>

        <div className="grid md:hidden mt-3 flex-1 place-content-center">
          <Image
            src="/assets/images/banner2.png"
            alt="Banner2 Image"
            height={214}
            width={326}
            className="rounded-full"
          />
        </div>
        <p className="block md:hidden text-lg text-black mb-3 lg:mb-6 leading-6 tracking-[2%] max-w-fit  lg:max-w-[407px] mt-3 ">
          Impact care seeks to provide good quality services for people with
          disabilities, ensuring that their individual
        </p>
        <div className="service-container flex flex-col gap-3 lg:gap-10">
          <div className="flex gap-4 items-start">
            <Check className="bg-tahiti-700 text-white rounded-full text-sm" />
            <p className="text-xl font-medium text-black">
              15+ Years of excellence
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Check className="bg-tahiti-700 text-white rounded-full text-sm" />
            <p className="text-xl font-medium text-black">
              A Multispeciality hospital
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Check className="bg-tahiti-700 text-white rounded-full text-sm" />
            <p className="text-xl font-medium text-black">
              24/7 Hour Medical Service
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Check className="bg-tahiti-700 text-white rounded-full text-sm" />
            <p className="text-xl font-medium text-black">
              A team of professionals
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-fit gap-6 col-span-2 items-center">
        <Image
          src="/assets/images/banner2.png"
          alt="Banner2 Image"
          height={214}
          width={326}
          className="hidden md:block rounded-full"
        />
        <p className="hidden md:block text-lg text-black mb-6leading-6 tracking-[2%]  max-w-[407px] ">
          Impact care seeks to provide good quality services for people with
          disabilities, ensuring that their individual
        </p>
      </div>
    </section>
  );
}
