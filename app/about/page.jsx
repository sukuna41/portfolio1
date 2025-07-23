"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code } from "lucide-react";

const About = () => {
  // Efek untuk animasi scroll (gantikan AOS dengan Framer Motion atau CSS)
  useEffect(() => {
    const handleScroll = () => {
      // Tambahkan logika animasi scroll di sini
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-full bg-primary">
      {/* Content Grid */}
      <div className="relative px-6 md:px-12 lg:px-24 h-full flex flex-col lg:flex-row gap-18 items-center">
        {/* Text Content */}
        <div className="lg:w-3/4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7sxl xl:text-8xl font-bold tracking-tight">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-2xl opacity-20"></div>
              <span className="relative bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
                About
              </span>
            </div>
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-2 bg-gradient-to-r from-accent-baja to-accent/80 blur-2xl opacity-20"></span>
              <span className="relative bg-gradient-to-r from-accent-hover to-accent bg-clip-text text-transparent">
                Me
              </span>
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg"
          >
            <p className="text-white text-shadow-lg leading-7 text-justify mt-4">
              Saya adalah lulusan Teknik Informatika Universitas Kuningan dengan
              kepribadian yang teliti, sistematis, dan berorientasi pada detail.
              Selama masa kuliah, saya aktif berorganisasi di Himpunan Mahasiswa
              Teknik Informatika (HIMA TI) yang membentuk kemampuan
              kepemimpinan, komunikasi, dan kerja sama tim saya
            </p>
            <p className="text-white text-shadow-lg leading-7 text-justify mt-4">
              Dengan latar belakang pendidikan di bidang teknologi informasi,
              pengalaman organisasi, dan pengalaman profesional di industri,
              saya memiliki etos kerja yang tinggi, kemampuan beradaptasi, serta
              mampu bekerja secara efektif baik secara individu maupun dalam tim
              dan selalu bersemangat untuk belajar hal-hal baru
            </p>
          </motion.div>
          {/* Quote */}
          <div className="relative  my-4 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-baja/40 to-accent/20 blur-3xl opacity-50"></div>
            <p className="p-4 rounded-lg border border-accent/60 text-white text-lg italic">
              "Lebih baik kecewa karena mencoba daripada kecewa karena tidak
              mencoba"
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="relative group/button">
              <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-2xl opacity-30 transition-opacity duration-500"></div>
              <Button
                variant="outline"
                className="relative h-10 rounded-lg uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-tr from-accent/60 to-accent-baja hover:bg-accent text-primary hover:scale-y-110 hover:border-primary/50 transition-all duration-300"
              >
                <Code className="text-md" />
                <span className="font-normal">Project</span>
              </Button>
            </div>
            <div className="relative grup/button">
              <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-2xl opacity-30 transition-opacity duration-500"></div>
              <Button
                variant="outline"
                size="sm"
                className="relative h-10 rounded-lg uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-tl from-accent/60 to-accent-baja hover:bg-accent text-primary hover:scale-y-110 hover:border-primary/50 transition-all duration-300"
              >
                <FiDownload className="text-xl" />
                <span className="font-normal">Download CV</span>
              </Button>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="w-104 h-104 sm:w-72 sm:h-72 rounded-lg overflow-hidden border-4 border-accent/40 relative">
              {/* <img
                src="/assets/webporto.jpg" // Ganti dengan path gambar Anda
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              /> */}
              <div className="absolute inset-1 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
