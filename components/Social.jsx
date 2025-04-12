import Link from "next/link";
import { Github, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    icon: <Github />,
    path: "https://github.com",
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

const Social = () => {
  return (
    <div className="flex gap-8">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className="hover:text-accentDefault transition-all delay-[25]"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
