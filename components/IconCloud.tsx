"use client"

import { useTheme } from "next-themes";
import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "next",
  "tailwindcss",
  "nestjs",
  "mongodb",
  "sql",
  "github",
  "vscode",
  "figma",
  "mysql",
  "googleanalytics",
  "socket.io",
  "postman",
  "node.js",
  "next.js",
  "graphql",
  "supabase",
  "googletagmanager",
  "docker",
  "visualstudiocode",
  "testinglibrary",
  "jest",
  "googlecloud",
  "mui",
  "slack",
  "php",
  "laravel",
  "springboot",
  "vue.js",
  "intellijidea",
  "spring",
];

export function IconCloudDemo() {
  const { theme } = useTheme();
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${theme === "dark"}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
