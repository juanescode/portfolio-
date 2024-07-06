import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
  return (
    <Container>
      <div>
        <div className="text-center" id="home">
          <h3 className="text-xl mb-3">Hello I´m</h3>
          <h1 className="text-4xl font-bold mb-3">JuanesCode</h1>
          <h2 className="text-2xl text-gray-400">Full stack developer</h2>
          <div className="flex items-center">
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
              <Link className={buttonVariants()} href="#contact">
                <Mail className="mr-2" /> Contact me
              </Link>

              <Link
                className={buttonVariants({ variant: "secondary" })}
                href="/cv-juanes.pdf"
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
