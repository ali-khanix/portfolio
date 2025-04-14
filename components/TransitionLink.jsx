"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";
import { Button } from "./ui/button";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === href) {
      animatePageOut(href, router);
    }
  };

  return <Button>{label}</Button>;
};

export default TransitionLink;
