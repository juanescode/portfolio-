import { dataServices } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
      <Title title="Services" subtitle="What I Offer as a Web Developer" />
      <div className="grid md:grid-cols-3 gap-5 mt-7">
        {dataServices.map((services) => (
          <div
            key={services.id}
            className="rounded-xl border-slate-400 border-2 p-6 h-full flex flex-col transition-transform transform hover:scale-105"
          >
            <h4 className="mb-4 text-xl flex gap-2 font-bold">
              {services.icon} {services.title}
            </h4>
            <ul className="flex-grow">
              {services.features.map((feature, index) => (
                <li key={index} className="flex gap-3 mb-3">
                  <Check size={20} />
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;