"use client";

import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/themes";
import { DialogTitle } from "@radix-ui/react-dialog";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState();

  return (
    <Sheet open={isOpen} onOpen>
      <SheetTrigger className="flex justify-center items-center">
        <AlignJustify className="text-accentDefault size-9 cursor-pointer" />
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}

        {/* Nav */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Ali<span className="text-accentDefault">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-8 justify-center items-center capitalize">
          {links.map((link, index) => {
            return (
              <Link
                className={
                  link.path === pathName &&
                  `text-accentDefault border-b-2 text-xl border-accentDefault`
                }
                key={index}
                href={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
