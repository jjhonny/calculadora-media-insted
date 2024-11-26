"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <span className="font-bold text-lg">Calculadora</span>
        </div>
        <div className="flex-1 flex justify-end">
          <nav className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Alternar tema"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
              <span className="sr-only">Alternar tema</span>
            </Button>
            <Link
              href="https://github.com/jjhonny/calculadora-media-insted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="Repositório GitHub"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">Repositório GitHub</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
