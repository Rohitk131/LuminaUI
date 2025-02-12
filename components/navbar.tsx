"use client";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import Search from "./search";

export const NAVLINKS = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/docs" },
  { title: "Examples", href: "/examples" },
  { title: "Colors", href: "/colors" },
];

export function Navbar() {
  return (
    <nav className="w-full sm:w-4/5 h-16 sticky top-0 z-50 px-4 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-full mx-auto mt-2 border border-gray-300/20 bg-slate-500/10 [@supports(backdrop-filter:blur(0))]:bg-opacity-60 [@supports(not(backdrop-filter:blur(0)))]:bg-gray-200/95 shadow-2xl">
      <div className="max-w-[1530px] mx-auto h-full flex items-center justify-between px-2 sm:px-4">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-3 sm:gap-8">
            {/* Logo */}
            <div className="flex">
              <Logo />
            </div>

            {/* Navigation Links (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Bar (Hidden on Small Screens) */}
          <div className="hidden md:flex items-center">
            <Search />
          </div>

          {/* Social Icons */}
          <Link
            href="https://github.com/rohitk131/luminaui"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            aria-label="github repo"
          >
            <Icons.gitHub className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/rohitkdev"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            aria-label="x profile"
          >
            <Icons.twitter className="w-5 h-5" />
          </Link>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logomain.png" alt="logo" width={30} height={30} />
      <h2 className="sm:text-sm text-xs lg:text-md font-bold text-center">
        Lumina UI
      </h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
