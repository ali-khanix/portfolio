import Link from "next/link";
import { Github, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    icon: <Github />,
    path: "https://github.com/ali-khanix",
  },
  {
    icon: <Linkedin />,
    path: "https://www.linkedin.com/in/ali-khani-b042091b9/",
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
