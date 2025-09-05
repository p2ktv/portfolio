"use client";

import { useEffect, useState } from "react";

import { Github, Linkedin } from "lucide-react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
  SiNestjs,
  SiTailwindcss,
  SiDocker,
  SiStripe,
  SiApachekafka,
  SiCloudflare,
  SiNodedotjs,
  SiPrisma,
  SiVercel,
  SiNginx,
} from "react-icons/si";
// import { FaServer } from "react-icons/fa";

import Skill from "@/components/skill";
import Header from "@/components/header";
import ExperienceItem from "@/components/experience";
import EducationItem from "@/components/education";
import CollapsibleSection from "@/components/section";

import { t, type Language } from "@/lib/i18n";

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    setLanguage((saved as Language) || "en");
  }, []);

  useEffect(() => {
    if (language) localStorage.setItem("language", language);
  }, [language]);

  if (!language) return null;

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12 space-y-12">
      <Header language={language} />

      <div className="border-t border-neutral-800"></div>

      <CollapsibleSection language={language} titleKey="skills">
        <div className="pt-4">
          <p className="font-medium mb-2">
            {t(language, "programming_languages")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Skill
              icon={<SiPython className="text-yellow-400" />}
              name="Python"
            />
            <Skill
              icon={<SiTypescript className="text-blue-500" />}
              name="TypeScript"
            />
            <Skill
              icon={<SiJavascript className="text-yellow-300" />}
              name="JavaScript"
            />
            <Skill
              icon={<SiPostgresql className="text-sky-400" />}
              name="SQL"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="font-medium mb-2">
            {t(language, "libraries_frameworks")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Skill icon={<SiReact className="text-cyan-400" />} name="React" />
            <Skill
              icon={<SiNextdotjs className="text-white" />}
              name="Next.js"
            />
            <Skill
              icon={<SiFlask className="text-neutral-300" />}
              name="Flask"
            />
            <Skill
              icon={<SiFastapi className="text-green-400" />}
              name="FastAPI"
            />
            <Skill
              icon={<SiNestjs className="text-pink-500" />}
              name="NestJS"
            />
            <Skill
              icon={<SiTailwindcss className="text-sky-400" />}
              name="Tailwind"
            />
            <Skill
              icon={<SiNodedotjs className="text-green-600" />}
              name="Node.js"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="font-medium mb-2">{t(language, "databases")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Skill
              icon={<SiMongodb className="text-green-500" />}
              name="MongoDB"
            />
            <Skill icon={<SiRedis className="text-red-500" />} name="Redis" />
            <Skill
              icon={<SiPostgresql className="text-sky-400" />}
              name="PostgreSQL"
            />
            <Skill
              icon={<SiPrisma className="text-blue-500" />}
              name="Prisma"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="font-medium mb-2">
            {t(language, "infrastructure_tools")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Skill
              icon={<SiDocker className="text-blue-400" />}
              name="Docker"
            />
            <Skill
              icon={<SiStripe className="text-indigo-400" />}
              name="Stripe"
            />
            <Skill
              icon={<SiApachekafka className="text-orange-400" />}
              name="Kafka"
            />
            <Skill
              icon={<SiCloudflare className="text-orange-500" />}
              name="Cloudflare"
            />
            <Skill icon={<SiVercel className="text-white" />} name="Vercel" />
            <Skill icon={<SiNginx className="text-green-500" />} name="Nginx" />
            {/* <Skill
              icon={<FaServer className="text-neutral-400" />}
              name="Coolify"
            /> */}
          </div>
        </div>
      </CollapsibleSection>

      <div className="border-t border-neutral-800"></div>

      <CollapsibleSection language={language} titleKey="experience">
        <ExperienceItem
          role="Founder"
          company="AutoMod"
          period="2020 - Present"
          logoSrc="/exp/automod.png"
          companyUrl="https://automod.xyz"
          info={[
            t(language, "lead_developer_info_1"),
            t(language, "lead_developer_info_2"),
            t(language, "lead_developer_info_3"),
            t(language, "lead_developer_info_4"),
          ]}
          highlightColor="text-purple-500"
        />

        <ExperienceItem
          role="Co-Founder"
          company="ModLog"
          period="2023 - Present"
          logoSrc="/exp/modlog.png"
          companyUrl="https://modlog.tv"
          info={[
            t(language, "cofounder_info_1"),
            t(language, "cofounder_info_2"),
            t(language, "cofounder_info_3"),
            t(language, "cofounder_info_4"),
            t(language, "cofounder_info_5"),
          ]}
          highlightColor="text-purple-500"
        />
      </CollapsibleSection>

      <div className="border-t border-neutral-800"></div>

      <CollapsibleSection language={language} titleKey="education">
        <EducationItem
          schoolKey="university_of_applied_sciences_hannover"
          degreeKey="bachelor_of_science_applied_computer_science"
          language={language}
          schoolUrl="https://www.hs-hannover.de/"
          period="2025 - 2028"
          logoSrc="/education/hsh.svg"
          info={[]}
          highlightColor="text-purple-500"
        />
      </CollapsibleSection>

      <footer className="flex flex-row justify-between items-center mt-16 text-neutral-500 text-sm border-t border-neutral-800 pt-6 gap-4 md:gap-0">
        <div>
          {t(language, "footer_copyright", { year: new Date().getFullYear() })}
        </div>

        <div className="flex flex-row items-center gap-4">
          <a
            href="/impressum"
            className="transition-colors duration-200 hover:text-white"
          >
            Impressum
          </a>

          <a
            href="https://github.com/p2ktv"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/pschaper/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src={language === "en" ? "/flags/us.svg" : "/flags/de.svg"}
              alt="Language flag"
              className="w-5 h-5"
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
