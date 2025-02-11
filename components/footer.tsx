"use client";
import Link from "next/link";

import { Icons } from "./icon";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logomain.png" width={25} height={25} alt="logo"></img>
              <h2 className="text-lg font-bold">Lumina UI</h2>
            </Link>
            <div className="mt-2">
              <Link href="https://x.com/compose/tweet?text=I%27ve%20been%20using%20%23SpectrumUI%20 share%20yourtought%20%40arihantCodes%20">
                <Button variant="secondary">
                  Share Your Thoughts On
                  <Icons.twitter className="icon-class ml-1 w-3.5 " />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-5">
              © {new Date().getFullYear()} Lumina UI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="/examples"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.arihant.us/"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/arihantcodes/spectrum-ui"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/arihantcodes"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/arihantcodes"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
