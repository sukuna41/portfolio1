"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const About = () => {
  // Data statis (ganti dengan data dinamis jika diperlukan)
  const [stats, setStats] = useState({
    projects: 12,
    certificates: 5,
    experience: 3,
  });

  // Efek untuk animasi scroll (gantikan AOS dengan Framer Motion atau CSS)
  useEffect(() => {
    const handleScroll = () => {
      // Tambahkan logika animasi scroll di sini
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-primary">
      {/* Header */}

      {/* Content Grid */}
      <div className="container mx-auto h-full flex flex-col lg:flex-row gap-18 items-center">
        {/* Text Content */}
        <div className="lg:w-3/4">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">[</span>About
            <span className="text-accent">]</span>Me
          </h1>

          <p className="text-white leading-relaxed text-justify mt-4">
            Lulusan Teknik Informatika Universitas Kuningan dengan kepribadian
            yang teliti, sistematis, dan berorientasi detail. Berpengalaman
            mengikuti organisasi di HIMA TI semasa kuliah serta pengalaman kerja
            di AHM sebagai Operator bagian Produksi Kontrol. Memiliki kemampuan
            di bidang IT, etos kerja tinggi, dan adaptabilitas dalam kerja tim
            maupun mandiri.
          </p>

          {/* Quote */}
          <div className="bg-primary p-4 rounded-lg border border-accent relative overflow-hidden mt-6">
            <p className="text-white italic relative z-10">
              Lebih baik kecewa karena mencoba daripada kecewa karena tidak
              mencoba
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg uppercase flex items-center gap-2 px-8 py-6 text-base"
            >
              <Code className="text-xl" />
              <span>Lihat Project</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg uppercase flex items-center gap-2 px-8 py-6 text-base"
            >
              <FiDownload className="text-xl" />
              <span>Download CV</span>
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white/10 relative">
              {/* <img
                src="/assets/webporto.jpg" // Ganti dengan path gambar Anda
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
