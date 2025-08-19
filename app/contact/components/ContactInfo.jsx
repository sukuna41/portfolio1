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
    <div className="p-8 bg-transparent h-5/6 mb-10 border border-accent rounded-lg shadow-md">
      <h2 className="text-5xl font-bold mb-14">Contact</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4 relative group/button w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-20 transition-opacity duration-500"></div>
          <Button
            variant="outline"
            className="w-full relative h-10 rounded-lg flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-accent transition-all duration-300"
          >
            <FaEnvelope className="text-md" />
            <span className="font-normal text-sm">rgilang739@gmail.com</span>
          </Button>
        </div>

        <div className="flex items-start gap-4 relative group/button w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-20 transition-opacity duration-500"></div>
          <Button
            variant="outline"
            className="w-full relative h-10 rounded-lg flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-accent transition-all duration-300"
          >
            <FaPhone className="text-md" />
            <span className="font-normal text-sm">+62 8880-2020-077</span>
          </Button>
        </div>

        <div className="flex items-start gap-4 relative group/button w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-30 transition-opacity duration-500"></div>
          <Button
            variant="outline"
            className="w-full relative h-10 rounded-lg flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-accent transition-all duration-300"
          >
            <FaMapMarkerAlt className="text-md" />
            <span className="font-normal text-sm">Kuningan, West Java ID</span>
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <div className="relative group/button mt-32 mb-14">
          <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-accent-baja blur-2xl opacity-20"></div>
          <Social
            containerStyle="flex gap-2"
            iconStyle="relative w-12 h-12 rounded-lg flex justify-center items-center bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:text-primary  border border-accent/30 hover:border-primary/50 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
