import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="py-16 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-1">
        <Image
          src="/assets/images/linegraph.svg"
          alt="line-graph "
          height={21}
          width={43}
        />
        <p className="uppercase text-gray-700 text-[18px] font-bold">
          Our Services
        </p>
      </div>
      <h2 className="text-[24px] md:text-5xl text-center font-bold text-gray-900 mb-8 mt-4 w-[504px] h-[105px] ">
        Find Out More About Our Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            icon: "/assets/images/service-icon/household.svg",
            title: "Household Task",
            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            icon: "/assets/images/service-icon/transport.svg",
            title: "Assist-Travel/ Transport",
            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Group/Centre Activity",
            icon: "/assets/images/service-icon/activities.svg",

            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Community Participation",
            icon: "/assets/images/service-icon/community.svg",

            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Personal Activities",
            icon: "/assets/images/service-icon/activities.svg",

            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Accommodation",
            icon: "/assets/images/service-icon/accomodation.svg",

            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ].map((service, index) => (
          <Card
            key={index}
            className="bg-tahiti-200 shadow-sm border-0 px-[8px] py-[16px] lg:px-[30px] lg:py-[32px] lg:pb-[70px] flex flex-col gap-6"
          >
            <CardHeader className="grid place-items-center p-0">
              <Image
                src={service.icon}
                alt={service.title}
                height={84}
                width={84}
                className="h-[46px] w-[46px] lg:h-[84px] lg:w-[84px]"
              />
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center  gap-4 p-0">
              <h3 className="text-[16px] text-center lg:text-left lg:text-2xl tracking-[1%] leading-[26px] font-semibold text-[#292929]">
                {service.title}
              </h3>
              <p className="text-[#292929] text-[14px] lg:text-[17px] leading-[18px] tracking-[2%] text-center">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10">
        <Button size="lg">View all</Button>
      </div>
    </section>
  );
}
