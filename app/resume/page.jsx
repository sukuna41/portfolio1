"use client";
import { supabase } from "@/lib/supabase";

import { projects } from "./data/dataProjects";

import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
// import TechStackSection from "./techspck/TechStackSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiCode, FiAward, FiBox } from "react-icons/fi";
import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="md:px-[10%] px-[5%] w-full bg-primary">
      <div className="container mx-auto h-full">
        {/* Header Utama */}
        <div className="text-center xl:text-left pb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-accent">[</span>
            Resume Saya
            <span className="text-accent">]</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8" // Margin bottom diperkecil
        >
          <TabsList className="grid grid-cols-3 bg-primary-foreground/10 backdrop-blur-sm p-1 rounded-lg gap-4">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent/20"
            >
              <FiCode className="text-lg" />
              <span>Projects</span>
            </TabsTrigger>

            <TabsTrigger
              value="certificates"
              className="data-[state=active]:bg-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent/20"
            >
              <FiAward className="text-lg" />
              <span>Certificates</span>
            </TabsTrigger>

            <TabsTrigger
              value="techstack"
              className="data-[state=active]:bg-accent data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-accent/20"
            >
              <FiBox className="text-lg" />
              <span>Tech Stack</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Konten Utama - Tanpa Header Tambahan */}
        <div className="mt-6">
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "certificates" && <CertificatesSection />}
          {/* {activeTab === "techstack" && <TechStackSection />} */}
        </div>
      </div>
    </div>
  );
}
