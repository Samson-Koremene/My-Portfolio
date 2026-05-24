import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  const featuredProjects = [
    {
      title: "The House Studios",
      description:
        "Contributed to the development of The House Studios, a premier production studio platform in Lagos offering bookable spaces for creators, brands, and storytellers.",
      technologies: ["React", "Tailwind Css", "Typescript"],
      liveUrl: "https://www.thehousestudioshq.com/",
      githubUrl: "#",
    },
    {
      title: "Medicx",
      description:
        "Contributed to the development of Medicx, a healthtech platform connecting patients with doctors, labs, pharmacies, and health records in one seamless and secure experience.",
      technologies: ["React", "Typescript", "TailwindCss"],
      liveUrl: "https://medicx.app/",
      githubUrl: "#",
    },
    {
      title: "Quad Research",
      description:
        "Contributed to the development of Quad Research, a professional academic services platform serving over 55,000 users across Nigeria.",
      technologies: ["Next.js", "Three Djs", "Typescript", "TailwindCss"],
      liveUrl: "https://quadtechsolutions.online/",
      githubUrl: "#",
    },
    {
      title: "Timeless Haven and Cottage",
      description:
        "Contributed to the development of Timeless Haven and Cottage, a hospitality platform for discovering and booking premium haven and cottage rental experiences.",
      technologies: ["React", "TailwindCss"],
      liveUrl: "https://www.timelesshavenandcottage.com/",
      githubUrl: "#",
    },
    {
      title: "NexMart",
      description:
        "Built the frontend for NexMart, a premium e-commerce marketplace focused on curated quality and seamless delivery experiences.",
      technologies: ["React", "Typescript", "TailwindCss"],
      liveUrl: "https://nexmart-frontend-staging.onrender.com/",
      githubUrl: "#",
    },
    {
      title: "Campus AI",
      description:
        "From instant AI answers to campus navigation and community connection, Campus AI gives you everything you need for Federal University Otuoke.",
      technologies: ["Next.js", "Typescript", "TailwindCss"],
      liveUrl: "https://campus-assist-ai-ss3x.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Bayelsa-Traffic-AI-Dynamics",
      description:
        "A web-based intelligent traffic management platform that leverages Artificial Intelligence to monitor, analyze, and optimize traffic flow across Bayelsa State, enabling real-time congestion control, smart signal coordination, and data-driven urban mobility planning.",
      technologies: ["React", "Typescript", "Supabase", "Tailwind-Css"],
      liveUrl: "https://bayelsa-traffic-ai-dynamics.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "NewLabel Tv",
      description:
        "Contributed to the development of New Label Hub, a content platform for streaming and purchasing exclusive courses from a growing collection of creators and storytellers.",
      technologies: ["React", "Typescript", "Tailwind-Css", "Supabase"],
      liveUrl: "https://newlabel-hub.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "CryptoTracker",
      description:
        "CryptoTracker is a simple, real-time crypto app that provides live prices, market charts, alerts, portfolio tracking, and news all in one clean interface..",
      technologies: ["React", "Typescript", "TailwindCss", "Supabase"],
      liveUrl: "https://cryptotracker-nine-pink.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center tracking-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div className="group h-full p-4 sm:p-6 border border-white/10 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden flex flex-col">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
                <h3
                  className="relative text-lg sm:text-xl mb-2 sm:mb-3 font-semibold tracking-tight group-hover:text-blue-400 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="relative text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed transition-colors duration-300 flex-grow"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="relative flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-200 border border-blue-500/20"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-all group/link hover:gap-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      size={14}
                      className="sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform"
                    />
                    <span className="relative">
                      Live Demo
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>

                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition-all group/link hover:gap-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={14}
                      className="sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform"
                    />
                    <span className="relative">
                      Code
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
