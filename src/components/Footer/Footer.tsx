import React from "react";
import Container from "../Container/Container";
import Link from "next/link";
import { FacebookIcon, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-3 lg:py-12">
      <Container className="">
        <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-5 justify-start lg:gap-[168px]">
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-950 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-400  text-[15px] ">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-400   text-[15px]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#referral"
                  className="hover:text-gray-400  text-[15px]"
                >
                  Referral
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400 text-[15px]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-gray-400 text-[15px]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* What We Do Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-950 uppercase">
              What We Do
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  Household Task
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  Assist-Travel/Transport
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  Group/Center Activity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  Participate Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-950 uppercase">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  General Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400  text-[15px]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-950">Talk to Us</h4>
            <p className="mt-2"> logo.support@logo.com</p>

            <p className="mt-2"> +66 2399 1145</p>
          </div>
        </div>
      </Container>
      <Container>
        {/* Social Media Icons */}
        <div className="border-t border-gray-300 mt-12 pt-6 w-full">
          <div className="container mx-auto flex justify-between items-center ">
            <Link href="/" className="text-tahiti-900">
              <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl">
                LOGO
              </h1>{" "}
            </Link>
            <p className="hidden md:block md:text-gray-800  text-sm">
              © 2024 Krezona pvt ltd. All rights reserved. Rights
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-400  text-[15px] border rounded-full h-12 w-12 border-gray-400  flex items-center justify-center"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="hover:text-gray-400  text-[15px] border rounded-full h-12 w-12 border-gray-400  flex items-center justify-center"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="hover:text-gray-400  text-[15px] border rounded-full h-12 w-12 border-gray-400  flex items-center justify-center"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <p className=" md:hidden mt-3 md:text-gray-800  text-sm">
          © 2024 Krezona pvt ltd. All rights reserved. Rights
        </p>
      </Container>
    </footer>
  );
}
