"use client";

import { dataPortfolio } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Title from "./shared/title";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { buttonVariants } from "./ui/button";


const Portfolio = () => {
  return (
    <div className="p-2 max-w-6xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Recent works 💼" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-1">
        {dataPortfolio.map((data) => (
          <CardContainer key={data.id} className="inter-var">
            <CardBody className="min-h-[400px] bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border flex flex-col justify-between">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {data.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={data.image}
                  alt="Image"
                  width={300}
                  height={300}
                  quality={100}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem translateZ="60" className="mt-5 flex gap-5">
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={data.urlDemo}
                  target="_blank"
                >
                  Demo
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
