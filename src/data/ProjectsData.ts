export interface Project {
  name: string;
  images: string[];
  frontendGitHub?: string;
  backendGitHub?: string;
  gitHub?: string;
  liveLink?: string;
  skills: string[];
}

export const Projects: Project[] = [
  {
    name: "invoices",
    images: ["Invoices-desktop"],
    gitHub: "https://github.com/khaledtf19/invoices",
    skills: ["NextJS", "tRPC", "Tailwind", "Prisma", "Postgresql"],
  },
  {
    name: "Lposts 2",
    images: ["Lposts2-desktop", "Lposts2-mobile"],
    frontendGitHub: "https://github.com/khaledtf19/Lposts2--Frontend",
    backendGitHub: "https://github.com/khaledtf19/Lposts2-Backend",
    skills: ["NextJS", "NestJS", "MongoDB", "TypeScript", "SASS"],
    liveLink: "https://lposts2-frontend.vercel.app/",
  },
  {
    name: "Lposts",
    images: ["Lposts-desktop", "Lposts-mobile"],
    gitHub: "https://github.com/khaledtf19/Lposts",
    skills: ["React", "NodeJS", "MongoDB", "JavaScript", "CSS"],
  },
  {
    name: "MoviesP",
    images: ["MovieP-desktop", "MovieP-mobile"],
    gitHub: "https://github.com/khaledtf19/MoviesP",
    skills: ["React", "Firebase", "JavaScript", "CSS", "Botstrap"],
  },
];
