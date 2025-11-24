"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";
import { TypeAnimation } from "react-type-animation";
import HyperText from "./ui/hyper-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import { ShinyButton } from "./magicui/shiny-button";

const Introduction = () => {
  return (
    <Container>
      <div>
        <div className="text-center" id="home">
          <div className="flex flex-col justify-center max-w-md">
            <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
              <HyperText
                className="text-4xl font-bold text-black dark:text-white"
                text="Hello, I'm "
              /> 
              <TypeAnimation
                sequence={[
                  "JuanesCode",
                  1000,
                  "Full stack developer",
                  1000,
                  "Computer Science Student",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block font-bold text-center"
              />
            </h1>
          </div>
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-4 mt-10 mx-auto max-w-xs md:max-w-md">
              <Link href="#contact">
                <ShinyButton className="flex items-center justify-center px-4 py-2 text-sm shadow-lg w-full">
                  <span className="tracking-normal">Contact Me</span>
                </ShinyButton>
              </Link>

              <Link href="/cvvv.pdf" target="_blank" download>
                <ShimmerButton className="px-4 py-2 text-sm flex items-center gap-1 w-full">
                  <Paperclip className="w-4 h-4 text-white" />
                  <span className="text-white">Download CV</span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
          <div
            className="profile-pic-wrapper"
            style={{
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              overflow: "hidden",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            <Image src="/yooo.jpeg" alt="Profile pic" width={120} height={120} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
