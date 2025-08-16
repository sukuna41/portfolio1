import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Social from "@/components/Social";

export default function ContactInfo() {
  return (
    <div className="p-8 bg-transparent border border-accent rounded-lg shadow-md">
      <h2 className="text-5xl font-bold mb-14">Contact</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-accent mt-1 text-2xl" />
          <div>
            <span className=" text-white text-lg">void@gmail.com</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaPhone className="text-accent text-2xl" />
          <div>
            <h3 className="text-lg">+62 8880-2020-077</h3>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-accent text-2xl" />
          <div>
            <h3 className="text-lg">Kuningan, West Java</h3>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="relative group/button mt-36 mb-4">
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
