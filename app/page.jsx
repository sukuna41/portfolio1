import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Social from "@/components/Social";
import TextRotator from "@/components/TextRotator";
import Photo from "@/components/Photo";

const PROFESSION_WORDS = [
  "Frontend Developer",
  "UI/UX Designer",
  "Website Developer",
  "Mobile App Developer",
];

const Home = () => {
  return (
    <section className="h-full relative">
      {/* Main Container - using flex for two-column layout */}
      <div className="px-6 md:px-12 lg:px-24 h-full bg-primary relative z-10 flex flex-col xl:flex-row gap-8 xl:gap-14 items-center">
        {/* Left Column - Text Content */}
        <div className="w-full xl:w-1/2 order-2 xl:order-1 py-8 xl:py-2">
          {/* Badge/Title */}
          <div
            className="inline-block animate-float"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative px-3 sm:px-4 py-2 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10">
                <span className="text-2xl bg-accent text-white bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                  Levels Just a Numbers
                </span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mt-6 xl:mt-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-2xl opacity-20"></span>
                <span className="relative text-shadow-lg bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
                  Gilang
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-accent-baja to-accent/80 blur-2xl opacity-20"></span>
                <span className="relative text-shadow-lg bg-gradient-to-t from-accent via-accent to-accent-baja/80 bg-clip-text text-transparent">
                  Ramadhan
                </span>
              </span>
            </h1>

            {/* Profession Rotator */}
            <div className="py-4 hidden sm:block">
              <TextRotator words={PROFESSION_WORDS} />
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed my-4 max-w-[700px]">
              Lulusan Teknik Informatika dengan pengalaman di organisasi kampus
              dan industri, teliti, sistematis, serta berorientasi pada detail.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <div className="relative group/button:">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-3xl opacity-70 group-hover/button:opacity-60 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  className="relative h-10 rounded-lg uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent-baja hover:bg-accent text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Phone className="text-lg" />
                  <span>Contact</span>
                </Button>
              </div>

              <div className="relative group/button">
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-accent-baja blur-2xl opacity-20"></div>
                <Social
                  containerStyle="flex gap-2"
                  iconStyle="relative w-12 h-12 rounded-lg flex justify-center items-center bg-gradient-to-t from-accent to-accent-baja hover:bg-accent text-primary hover:text-primary  border border-accent/30 hover:border-primary/50 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="w-full xl:w-1/2 order-1 xl:order-2 flex justify-center items-center">
          <div className="relative w-full max-w-md xl:max-w-lg">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
