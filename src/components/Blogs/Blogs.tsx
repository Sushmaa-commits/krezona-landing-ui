import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="pb-[60px] lg:py-[95px] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-1">
        <Image
          src="/assets/images/linegraph.svg"
          alt="line-graph "
          height={21}
          width={43}
        />
        <p className="uppercase text-gray-700 text-[18px] font-bold">
          Our Blogs
        </p>
      </div>
      <h2 className="text-[24px] lg:text-[40px] text-center font-bold text-gray-900 mt-[8px] mb-[24px] lg:mb-8 lg:mt-4 w-[447px] h-[48px] ">
        Latest Blogs & Articles
      </h2>

      <ScrollArea className="w-screen block lg:hidden whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className="max-w-[162px] bg-tahiti-200 rounded-lg p-0 border-0"
              >
                <Image
                  src="/assets/images/blogs/blog1.svg"
                  alt="Blog Image"
                  className=" mb-4"
                  height={102}
                  width={162}
                />
                <CardContent className="flex flex-col items-start p-0 justify-center mb-4 px-2">
                  <h3 className="text-[18px] leading-[22px] tracking-[2%] font-semibold mb-4 text-[#1F1F1F] text-wrap">
                    Adaptive Sports: Breaking Barriers in Physical Fitness
                  </h3>
                  <p className="text-[14px] tracking-[2%] leading-[18px] text-[#1F1F1F] text-wrap">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardContent>
                <CardFooter className="p-0 px-2 mb-[20px]">
                  <Link
                    href=""
                    className="flex text-[14px] leading-[20px] tracking-[2%] gap-2 items-center justify-start"
                  >
                    Veiw Detail <ArrowRightIcon />
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Card key={index} className=" bg-tahiti-200 rounded-lg  border-0">
              <Image
                src="/assets/images/blogs/blog1.svg"
                alt="Blog Image"
                className=" mb-4 w-full object-cover"
                height={249}
                width={371}
              />
              <CardContent className="flex flex-col items-center justify-center mb-4">
                <h3 className="text-xl font-semibold mb-4 text-[#1F1F1F]">
                  Adaptive Sports: Breaking Barriers in Physical Fitness
                </h3>
                <p className="text-[17px] text-[#1F1F1F]">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-4 items-center">
                  Veiw Detail <ArrowRightIcon />
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      <div className="mt-10">
        <Button size="lg">View all</Button>
      </div>
    </section>
  );
}
