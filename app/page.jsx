import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";
import { Contact, Phone } from "lucide-react";

// Di dalam komponen Home:

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Badge/Title */}
            <span className="text-2xl text-accent">[</span>
            <span className="text-2xl">Hello There</span>
            <span className="text-2xl text-accent">]</span>
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 mt-2">
              Saya adalah <br />
              <span className="text-accent">Gilang Ramadhan</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-[600px]">
              Lulusan Teknik Informatika Universitas Kuningan dengan kepribadian
              yang teliti, sistematis, dan berorientasi detail.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                // Style="border border-primary text-primary text-accent hover:bg-primary hover:text-accent"
                className="rounded-lg uppercase flex items-center gap-2 px-8 py-6 text-base data-[state=active]:bg-accent data-[state=active]:text-primary "
              >
                <Phone className="text-xl" />
                <span>Contact Saya</span>
              </Button>

              <div className="flex gap-4">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-14 h-14 border border-accent rounded-lg flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
