import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  return (
    <Container className="bg-gray-200 p-[20px] lg:px-[83px] ">
      {/* Left Side: Testimonial Heading and Content */}
      <div className="md:w-1/3 text-left md:text-left mb-8 md:mb-0">
        <div className="flex gap-2 mb-4">
          <Image
            src="/assets/images/linegraph.svg"
            alt="line-graph "
            height={21}
            width={43}
          />
          <p className="uppercase text-gray-700 text-[18px] font-bold">
            Testinomial
          </p>
        </div>
        <h2 className="text-[24px] leading-[24px] tracking-[1%] lg:text-[40px] font-bold text-black mt-1 mb-3 lg:mt-0 lg:mb-5">
          Our Success Stories
        </h2>
        <p className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]  text-black mb-6 lg:mb-7 font-medium lg:max-w-[405px] tracking-[2%]">
          Discover the experience and success stories shared by those who care
        </p>

        {/* Watch Button */}

        <Button
          size="lg"
          className="hidden lg:flex text-white hover:bg-gray-700 "
        >
          <Play className="mr-2" /> Watch
        </Button>
      </div>

      {/* Right Side: Image or Video Placeholder */}
      <div className="md:w-1/2">
        <div className="relative">
          <Image
            src="/assets/images/testimonial.svg"
            alt="Testimonial"
            height={749}
            width={463}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Play className="text-2xl text-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
