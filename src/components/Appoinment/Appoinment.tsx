import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Appoinment() {
  return (
    <section className="py-[60px] lg:py-[120px] flex flex-col md:flex-row items-center justify-between">
      {/* Left Content: Text and Steps */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <div className="flex gap-1 mb-3">
          <Image
            src="/assets/images/linegraph.svg"
            alt="line-graph "
            className="hidden lg:block"
            height={21}
            width={43}
          />
          <p className="uppercase text-gray-700 text-[18px] font-bold">
            Appointment
          </p>
        </div>
        <h2 className="text-[24px] lg:text-4xl font-bold text-left text-black mb-3 lg:mb-[20px] leading-[48px] tracking-wide mt-0">
          Wanna Book An Appointment
        </h2>
        <p className="text-[16px] lg:text-[20px] text-black font-normal mb-6 lg:mb-14 leading-[24px] lg:leading-[30px] text-left tracking-[2%]">
          At Impact Disability Support Service, we’re here to help you every
          step of the way. Making an appointment is simple and easy.
        </p>
        {/* Appointment Steps */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Step 1: Initial Contact */}
          <div className="flex items-start gap-4">
            <div className="h-[34px] w-[34px] bg-[#2E4D70] text-white rounded-full flex items-center justify-center">
              <span className="text-[18px] font-semibold">1</span>
            </div>
            <div>
              <h3 className="text-xl text-left font-semibold leading-[24px] tracking-[2%] text-black mb-3">
                Initial Contact
              </h3>
              <p className="text-black text-left text-[18px] leading-[30px]  tracking-[0.1px] max-w-sm">
                Reach out via phone or our website’s contact form.
              </p>
            </div>
          </div>

          {/* Step 2: Appointment Schedule */}
          <div className="flex items-start">
            <div className="h-[34px] w-[34px] bg-[#2E4D70] text-white rounded-full flex items-center justify-center mr-4">
              <span className="text-[18px] font-semibold">2</span>
            </div>
            <div>
              <h3 className="text-xl text-left font-semibold text-black mb-3">
                Appointment Schedule
              </h3>
              <p className="text-black text-left text-[18px] leading-[30px]  tracking-[0.1px] max-w-sm">
                We’ll arrange a time that suits you.
              </p>
            </div>
          </div>

          {/* Step 3: Service Delivery */}
          <div className="flex items-start">
            <div className="h-[34px] w-[34px] bg-[#2E4D70] text-white rounded-full flex items-center justify-center mr-4">
              <span className="text-[18px] font-semibold">3</span>
            </div>
            <div>
              <h3 className="text-xl text-left font-semibold text-black mb-3">
                Service Delivery
              </h3>
              <p className="text-black text-left text-[18px] leading-[30px]  tracking-[0.1px] max-w-sm">
                We’ll deliver the services you need efficiently.
              </p>
            </div>
          </div>
        </div>
        {/* Book Appointment Button */}
        <div className="mt-10">
          <Button size="lg"> Book an Appointment</Button>
        </div>
      </div>

      {/* Right Image */}
      <Image
        src="/assets/images/appointmentbanner.svg"
        alt="Appointment"
        width={440}
        height={580}
        className="hidden lg:block"
      />
    </section>
  );
}
