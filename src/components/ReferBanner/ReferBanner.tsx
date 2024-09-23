import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Container from "../Container/Container";

export default function ReferBanner() {
  return (
    <Container className="flex-row lg:flex-row justify-between items-end lg:items-start bg-[#86A4AF] h-[280.85px]">
      <div className="flex flex-col gap-6 h-full">
        <h1 className="text-2xl font-[500] max-w-[190px] lg:max-w-[588px] lg:text-4xl text-white mt-[61px]">
          Have to refer someone to our Services?
        </h1>

        <div className="flex gap-1">
          <Link
            href="/"
            className="flex gap-4 underline max-w-[169px] lg:max-w-fit text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] tracking-[2%]"
          >
            Fill in a form and we’ll do the rest
          </Link>
          <MoveUpRight />
        </div>
      </div>

      <Image
        src="/assets/images/happykid.svg"
        alt="refer"
        width={260}
        height={329}
        className="w-[200px] lg:w-[260px] lg:-m-[50px]"
      />
    </Container>
  );
}
