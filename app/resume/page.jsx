"use client";

import { useState } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { FiCode, FiAward, FiBox } from "react-icons/fi"; // Using react-icons with proper Fi prefix

export default function Resume() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full bg-primary">
      <div className="text-center pb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-accent">
          Resume Saya
        </h2>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#00ff00",
              },
            }}
          >
            <Tab
              icon={<FiCode size={20} className="text-white" />}
              label="Projects"
              sx={{ color: "white", "&.Mui-selected": { color: "#00ff00" } }}
            />
            <Tab
              icon={<FiAward size={20} className="text-white" />}
              label="Certificates"
              sx={{ color: "white", "&.Mui-selected": { color: "#00ff00" } }}
            />
            <Tab
              icon={<FiBox size={20} className="text-white" />}
              label="Tech Stack"
              sx={{ color: "white", "&.Mui-selected": { color: "#00ff00" } }}
            />
          </Tabs>
        </AppBar>

        <Box sx={{ p: 2 }}>
          {/* 
          {value === 0 && <ProjectsSection />}
          {value === 1 && <CertificatesSection />}
          {value === 2 && <TechStackSection />}
          */}
        </Box>
      </Box>
    </div>
  );
}
