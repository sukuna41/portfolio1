import { Item } from "@radix-ui/react-select";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/sukuna41/" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/gilang-ramadhan41/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/r_gilang.pdf/" },
  { icon: <FaTwitter />, path: "https://x.com/Genomic41" },
  { icon: <FaTiktok />, path: "https://https://www.tiktok.com/@genomicvoid" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
