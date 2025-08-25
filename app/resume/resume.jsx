"use client";

import ProjectsSection from "./components/Projects/ProjectsSection";
import CertificatesSection from "./components/Certificates/CertificatesSection";
import SkillsSection from "./components/Skills/SkillsSection";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiCode, FiAward, FiBox } from "react-icons/fi";
import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="h-full relative">
      <div className="px-6 my-0 sm:py-8 md:py-10 md:px-12 lg:px-24 py-2 w-full mx-auto h-full">
        <h1 className="text-5xl py-10 lg:pt-0 md:text-4xl xl:text-7xl text-left sm:text-center font-bold tracking-tight">
          <div className="relative inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-baja blur-3xl opacity-20"></div>
            <span className="relative bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
              My
            </span>
          </div>
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-0.5 bg-gradient-to-r from-accent-baja to-accent/80 blur-3xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Portfolio
            </span>
          </span>
        </h1>
        {/* Tab Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="border border-accent/70 h-20 rounded-lg px-2 py-3"
        >
          <TabsList className="grid grid-cols-3 bg-primary-foreground/10 backdrop-blur-sm p-1 rounded-lg gap-4">
            <TabsTrigger
              value="projects"
              className="text-white data-[state=active]:bg-gradient-to-b from-accent/90 to-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent"
            >
              <FiCode className="sm:hidden text-2xl" />
              <span className="sm:flex hidden text-md lg:text-lg items-center text-center">
                Projects
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="certificates"
              className="text-white data-[state=active]:bg-gradient-to-b from-accent/90 to-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent"
            >
              <FiAward className="sm:hidden text-2xl" />
              <span className="sm:flex hidden text-md lg:text-lg items-center text-center">
                Certificates
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="skills"
              className="text-white data-[state=active]:bg-gradient-to-b from-accent/90 to-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent"
            >
              <FiBox className="sm:hidden text-2xl" />
              <span className="sm:flex hidden text-md lg:text-lg items-center text-center">
                Skills
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Konten Utama - Tanpa Header Tambahan */}
        <div className="mt-6">
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "certificates" && <CertificatesSection />}
          {activeTab === "skills" && <SkillsSection />}
        </div>
      </div>
    </section>
  );
}
