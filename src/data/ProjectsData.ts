
export interface Project {
  name: string;
  images: ImageMetadata[];
  frontendGitHub?: string;
  backendGitHub?: string;
  gitHub?: string;
  liveLink?: string;
  skills: string[];
}
import type { ImageMetadata } from 'astro';
import { LpostsMobile, LpostsDesktop, Lposts2Mobile, Lposts2Desktop, MoviePMobile, MoviePDesktop, InvoicesDesktop } from '../images/projects/index'

export const projects: Project[] = [
  {
    name: "invoices",
    images: [InvoicesDesktop],
    gitHub: "https://github.com/khaledtf19/invoices",
    skills: ["NextJS", "tRPC", "Tailwind", "Prisma", "Postgresql"],
  },
  {
    name: "Lposts 2",
    images: [Lposts2Desktop, Lposts2Mobile],
    frontendGitHub: "https://github.com/khaledtf19/Lposts2--Frontend",
    backendGitHub: "https://github.com/khaledtf19/Lposts2-Backend",
    skills: ["NextJS", "NestJS", "TypeScript", "MongoDB", "SASS"],
    liveLink: "https://lposts2-frontend.vercel.app/",
  },
  {
    name: "Lposts",
    images: [LpostsDesktop, LpostsMobile],
    gitHub: "https://github.com/khaledtf19/Lposts",
    skills: ["React", "NodeJS", "JavaScript", "MongoDB", "CSS"],
  },
  {
    name: "MoviesP",
    images: [MoviePDesktop, MoviePMobile],
    gitHub: "https://github.com/khaledtf19/MoviesP",
    skills: ["React", "Firebase", "JavaScript", "CSS", "Botstrap"],
  },
];
