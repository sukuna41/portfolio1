import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import Social from "@/components/Social";
import TextRotator from "@/components/TextRotator";
import Photo from "@/components/Photo";

const PROFESSION_WORDS = [
  "IT Office Administartion",
  "IT Support",
  "Junior Web Developer",
];

const Home = () => {
  return (
    <section className="h-full relative">
      {/* Main Container - using flex for two-column layout */}
      <div className="px-10 md:px-12 lg:px-24 h-full bg-primary relative z-10 flex flex-col xl:flex-row gap-8 xl:gap-14 items-center">
        {/* Left Column - Text Content */}
        <div className="w-full xl:w-1/2 order-2 xl:order-1  xl:py-2">
          {/* Badge/Title */}
          {/* Main Heading */}
          <div className="relative xl:mt-6">
            <h1 className="text-6xl xs:text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-2xl opacity-20"></span>
                <span className="relative text-shadow-lg bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
                  Gilang
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-accent-baja to-accent/80 blur-2xl opacity-20"></span>
                <span className="relative text-shadow-lg bg-gradient-to-t from-accent via-accent to-accent-baja/60 bg-clip-text text-transparent">
                  Ramadhan
                </span>
              </span>
            </h1>

            {/* Profession Rotator */}
            <div className="py-4 ">
              <TextRotator words={PROFESSION_WORDS} />
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed my-4">
              A graduate of Computer Science with experience in campus
              organizations and industry, meticulous, systematic, and
              detail-oriented.
            </p>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="flex flex-row max-w-full items-center xl:gap-6 mt-8">
              <div className="relative group/button flex-wrap justify-start sm:justify-start">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-3xl opacity-70 group-hover/button:opacity-60 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  className="relative h-12 rounded-lg uppercase flex items-center gap-2 px-6 py-4  bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:border-primary/50 transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
                >
                  <span>Chat With Me</span>
                  <MessageCircleMore className="text-lg" />
                </Button>
              </div>

              <div className="w-full relative group/button flex items-center flex-wrap justify-end sm:justify-start">
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-accent-baja blur-2xl opacity-20"></div>
                <Social
                  containerStyle="flex gap-1 justify-center items-center h-12"
                  iconStyle="relative w-12 h-12 rounded-lg flex justify-center items-center bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:text-primary border border-accent/30 hover:border-primary/50 transition-all duration-300"
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
