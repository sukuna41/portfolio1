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
    <section className="h-full relative">
      <div className="px-6 md:px-12 lg:px-24 py-2 w-full bg-primary mx-auto h-full">
        {/* Tab Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8" // Margin bottom diperkecil
        >
          <TabsList className="grid grid-cols-3 bg-primary-foreground/10 backdrop-blur-sm p-1 rounded-lg gap-4">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-gradient-to-t from-accent to-accent/60 data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-gradient-to-t from-accent to-accent/60"
            >
              <FiCode className="text-lg" />
              <span>Projects</span>
            </TabsTrigger>

            <TabsTrigger
              value="certificates"
              className="data-[state=active]:bg-gradient-to-t from-accent to-accent/60 data-[state=active]:text-primary flex gap-2 hover:text-white h-12 hover:border border-accent"
            >
              <FiAward className="text-lg" />
              <span>Certificates</span>
            </TabsTrigger>

            <TabsTrigger
              value="techstack"
              className="data-[state=active]:bg-gradient-to-t from-accent to-accent/60 data-[state=active]:text-primary flex gap-2 hover:text-primary h-12 hover:bg-gradient-to-t from-accent to-accent/60"
            >
              <FiBox className="text-lg" />
              <span>Skills</span>
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
    </section>
  );
}
