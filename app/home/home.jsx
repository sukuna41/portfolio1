import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import Social from "@/components/Social";
import TextRotator from "@/components/TextRotator";
import Photo from "@/components/Photo";

const PROFESSION_WORDS = [
  "Junior Web Developer",
  "Front End Developer",
  "Support Administration",
];

const Home = () => {
  return (
    <section className="h-full relative">
      {/* Main Container*/}
      <div className="px-6 md:px-12 lg:px-24 md:py-6 md:pb-14 relative h-full sz-10 flex flex-col lg:flex-row gap-8 xl:gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="w-full xl:w-1/2 order-2 xl:order-1 xl:py-2">
          {/* Main Heading */}
          <div className="relative xl:mt-6 ">
            <h1 className="text-6xl lg:text-8xl md:text-7xl sm:text-6xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-2xl opacity-20"></span>
                <span className="relative text-shadow-lg bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
                  Gilang
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="absolute -inset-2 bg-gradient-to-r from-accent-baja to-accent/80 blur-2xl opacity-20"></span>
                <span className="relative text-shadow-lg bg-gradient-to-t from-accent via-accent to-accent-baja/60 bg-clip-text text-transparent">
                  Ramadhan
                </span>
              </span>
            </h1>

            {/* Profession Rotator */}
            <div className="font-semibold py-4 text-xl md:text-3xl bg-gradient-to-r  from-white via-green-200 to-accent/50 bg-clip-text text-transparent">
              <TextRotator words={PROFESSION_WORDS} />
            </div>

            {/* Description */}
            <p className="text-md sm:text-lg text-muted-foreground leading-relaxed my-2">
              A graduate of Computer Science with experience in campus
              organizations and industry, meticulous, systematic, and
              detail-oriented.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row sm:max-w-full sm:justify-start justify-center items-center gap-2 mt-8">
              <div className="relative group/button hidden md:flex flex-wrap sm:justify-start">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-3xl opacity-30 group-hover/button:opacity-60 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  className="relative w-14 md:w-fit h-14 sm:h-14 rounded-lg uppercase flex items-center gap-2 px-1 sm:px-4 py-4  bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:border-primary/50 transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
                >
                  <span className="hidden md:flex">Let{'"'}s Connect</span>
                  <MessageCircleMore className="flex md:hidden text-md" />
                </Button>
              </div>

              <div className="w-full xl:w-1/2 relative group/button flex items-center flex-wrap xl:justify-start sm:justify-between">
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent to-accent-baja blur-xl opacity-5"></div>
                <Social
                  containerStyle="flex sm:gap-2 gap-3 justify-between w-full sm:justify-center sm:w-auto items-center h-14"
                  iconStyle="relative sm:w-14 w-20 sm:h-14 h-14 rounded-lg flex justify-center items-center bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:text-primary border border-accent/30 hover:border-primary/50 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="flex sm:hidden lg:flex xl:ml-8 mt-8 w-full h-[250px] lg:h-[500px] border-2 border-accent order-1 lg:order-2 justify-end items-end">
          {/* Wrapper yang menentukan ukuran penuh */}
          <div className="relative w-full h-full">
            <Photo className="w-full h-full" imgClassName="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
