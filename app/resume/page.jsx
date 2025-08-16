"use client";
import { supabase } from "@/lib/supabase";

import { projects } from "./data/dataProjects";

import ProjectsSection from "./components/Projects/ProjectsSection";
import CertificatesSection from "./components/Certificates/CertificatesSection";
import SkillsSection from "./components/Skills/SkillsSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiCode, FiAward, FiBox } from "react-icons/fi";
import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="h-full relative">
      <div className="px-6 md:px-12 lg:px-24 py-2 w-full bg-primary mx-auto h-full">
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
              <FiCode className="text-2xl" />
              <span className="text-lg">Projects</span>
            </TabsTrigger>

            <TabsTrigger
              value="certificates"
              className="text-white data-[state=active]:bg-gradient-to-b from-accent/90 to-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent"
            >
              <FiAward className="text-2xl" />
              <span className="text-lg">Certificates</span>
            </TabsTrigger>

            <TabsTrigger
              value="skills"
              className="text-white data-[state=active]:bg-gradient-to-b from-accent/90 to-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent"
            >
              <FiBox className="text-2xl" />
              <span className="text-lg">Skills</span>
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
