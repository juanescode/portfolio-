import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";

const Experience = () => {
  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title title="Experience" subtitle="Skills" />

      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {dataExperience
          .filter((data) => data.title !== "Tools")
          .map((data) => (
            <div
              key={data.id}
              className="p-6 rounded-xl border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:hover:border-gray-400 dark:bg-[hsl(220,40%,2%)] bg-white"
            >
              <h3 className="text-center text-xl font-semibold text-black mb-4 dark:text-white">{data.title}</h3>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {data.experience.map((item) => (
                  <div
                    key={item.name}
                    className="p-2 rounded-lg flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors dark:bg-gray-950 dark:hover:bg-gray-600"
                  >
                    <BadgeCheck className="text-green-500 dark:text-green-400" />
                    <p className="text-black dark:text-white">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        <div
          className="p-6 rounded-xl border border-gray-300 shadow-lg md:col-span-2 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:hover:border-gray-400 bg-white dark:bg-[hsl(220,40%,2%)]"
        >
          <h3 className="text-center text-xl font-semibold text-black mb-4 dark:text-white">Tools</h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:justify-items-center">
            {dataExperience
              .find((data) => data.title === "Tools")
              ?.experience.map((item) => (
                <div
                  key={item.name}
                  className="p-2 rounded-lg flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors dark:bg-gray-950 dark:hover:bg-gray-600"
                >
                  <BadgeCheck className="text-green-500 dark:text-green-400" />
                  <p className="text-black dark:text-white">{item.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
