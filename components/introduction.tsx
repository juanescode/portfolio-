"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";
import { TypeAnimation } from "react-type-animation";
import HyperText from "./ui/hyper-text";

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
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
              <Link className={buttonVariants()} href="#contact">
                <Mail className="mr-2" /> Contact me
              </Link>

              <Link
                className={buttonVariants({ variant: "secondary" })}
                href="/cv.pdf"
                target="_blank"
              >
                <Paperclip className="mr-2" /> Download CV
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
            <Image src="/yoo.jpeg" alt="Profile pic" width={120} height={120} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
