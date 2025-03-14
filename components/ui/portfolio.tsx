import { dataPortfolio } from "@/data";
import Title from "../shared/title";
import { ProjectCard } from "../ProjectCard";
import { Globe } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Recent works 💼" />

      <div className="grid md:grid-cols-2 gap-14 mt-4">
        {dataPortfolio.map((data) => (
          <ProjectCard
            key={data.id}
            title={data.title}
            image={data.image}
            href={data.urlDemo}
            description={data.description}
            dates={data.dates}
            tags={data.tags}
            links={[
              { icon: <Globe key="globe" className="h-4 w-4" />, type: "Website", href: data.urlDemo }
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
