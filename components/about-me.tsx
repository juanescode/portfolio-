import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="About Me" subtitle="know me" />
      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 bg-transparent border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-[hsl(220,40%,2%)] bg-white"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-500">{data.description}</p>
              </div>
            ))}
          </div>

          <p className="my-8">
            Hi! My name is Juanes. I am a computer science student.
            <br />
            <br />
            🔭 I’m currently a computer science student.
            <br />
            🌱 I’m currently learning TypeScript.
            <br />
            👯 I’m looking to collaborate on projects.
            <br />
            💬 Ask me about Sql, JavaScript, Sql, Postgres, mongoDB, NodeJS,
            TypeScript and much more.
          </p>

          <InteractiveHoverButton>
            <a href="tel:+573206233559" className="flex items-center">
              <Phone size={20} className="mr-2" /> Talk later
            </a>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
