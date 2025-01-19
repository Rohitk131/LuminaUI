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
    <nav className="w-2/3  h-16 sticky top-0 z-50 px-4 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-full mx-4 mt-2 border border-gray-300/20 bg-slate-500/10  [@supports(backdrop-filter:blur(0))]:bg-opacity-60 [@supports(not(backdrop-filter:blur(0)))]:bg-gray-200/95 shadow-2xl">
      <div className="sm:px-3 px-2 max-w-[1530px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-5">

          <SheetLeftbar />

          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="sm:flex">
              <Logo />
            </div>

            {/* Navigation Links */}
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search and Icons */}
          <div className="hidden md:flex items-center gap-2">
            <Search />
          </div>
          <Link
            href="https://github.com/arihantcodes/spectrum-ui"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Icons.gitHub className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/arihantcodes"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Icons.twitter className="w-5 h-5" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logomain.png" alt="Lumina UI" width={30} height={30} />
      <h2 className="text-base md:text-lg font-bold">Lumina UI</h2>
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
            activeClassName="text-black dark:text-white font-semibold"
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
