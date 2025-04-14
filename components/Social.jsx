import Link from "next/link";
import { Github, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    icon: <Github />,
    path: "https://github.com/ali-khanix",
  },
  {
    icon: <Linkedin />,
    path: "https://linkedin.com",
  },
  {
    icon: <Youtube />,
    path: "https://youtube.com",
  },
  {
    icon: <Instagram />,
    path: "https://instagram.com",
  },
  {
    icon: <Twitter />,
    path: "https://x.com",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
