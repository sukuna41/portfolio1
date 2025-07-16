import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <section className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 ">
            {/* Badge/Title */}
            <span className="">Seorang Sarjana Teknik Informatika</span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 mt-4">
              Hallo Saya <br />
              <span className="text-accent">Gilang Ramadhan</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Lulusan Teknik Informatika Universitas Kuningan dengan kepribadian
              yang teliti, sistematis, dan berorientasi detail.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 px-8 py-6 text-base"
              >
                <FiDownload className="text-xl" />
                <span>Download CV</span>
              </Button>

              <div className="flex gap-4">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border bordr-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative w-full max-w-md aspect-square lg:flex-1">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
