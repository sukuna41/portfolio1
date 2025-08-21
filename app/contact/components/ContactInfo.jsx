import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";

export default function ContactInfo() {
  return (
    <div className="p-8 bg-transparent h-5/6 mt-8  border border-accent rounded-lg shadow-md">
      <h2 className="hidden sm:flex text-5xl font-bold mb-14">Contact</h2>
      <h1 className="flex sm:hidden pb-10 text-3xl text-center font-bold tracking-tight">
        <span className="relative inline-block">
          <span className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-baja blur-2xl opacity-20"></span>
          <span className="relative text-shadow-lg bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
            Let{"'"}s{" "}
          </span>
        </span>
        <span className="relative inline-block mt-1">
          <span className="absolute -inset-2 bg-gradient-to-r from-accent-baja to-accent/80 blur-2xl opacity-20"></span>
          <span className="relative text-shadow-lg bg-gradient-to-t from-accent via-accent to-accent-baja/60 bg-clip-text text-transparent">
            Connect
          </span>
        </span>
      </h1>
      <div className="flex flex-col gap-4 w-full">
        {/* <!-- Email --> */}
        <div className="flex justify-start relative group/button w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-20 transition-opacity duration-500"></div>
          <Button
            variant="outline"
            className="w-full relative h-10 rounded-lg flex items-center gap-2 px-4 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-accent transition-all duration-300 justify-start"
          >
            <FaEnvelope className="text-right text-xl" />
            <span className="font-normal text-md md:text-sm text-left">
              rgilang739@gmail.com
            </span>
          </Button>
        </div>

        {/* <!-- Phone --> */}
        <div className="flex justify-start relative group/button w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-20 transition-opacity duration-500"></div>
          <Button
            variant="outline"
            className="w-full relative h-10 rounded-lg flex items-center gap-2 px-4 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-accent transition-all duration-300 justify-start"
          >
            <FaPhone className="text-xl" />
            <span className="font-normal text-md md:text-sm text-left">
              +62 8880-2020-077
            </span>
          </Button>
        </div>

        {/* <!-- Location --> */}
        <div className="flex justify-start relative group/button w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-30 transition-opacity duration-500"></div>
          <Button
            variant="outline"
            className="w-full relative h-10 rounded-lg flex items-center gap-2 px-4 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-accent transition-all duration-300 justify-start"
          >
            <FaMapMarkerAlt className="text-xl" />
            <span className="font-normal text-md md:text-sm text-left">
              Kuningan, West Java ID
            </span>
          </Button>
        </div>
      </div>
      <div className="relative hidden xl:flex justify-between items-center text-justify group/button mt-32 mb-14 w-full">
        <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-accent-baja blur-2xl opacity-20"></div>
        <Social
          containerStyle="flex gap-2 justify-between w-full"
          iconStyle="relative w-14 h-14 rounded-lg flex justify-center items-center bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:text-primary border border-accent/30 hover:border-primary/50 transition-all duration-300"
        />
      </div>
    </div>
  );
}
