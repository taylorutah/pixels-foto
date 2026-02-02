"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-gray-800 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/80">
      {/* Top bar with contact info */}
      <div className="hidden border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Phone className="h-4 w-4" />
              {SITE_CONFIG.phoneFormatted}
            </a>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <span className="text-gray-600 dark:text-gray-400">
              Mon-Fri: {SITE_CONFIG.hours.weekdays} | Sat: {SITE_CONFIG.hours.saturday}
            </span>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {SITE_CONFIG.address.full}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-primary-600">P</span>
              <span className="text-red-500">i</span>
              <span className="text-green-500">x</span>
              <span className="text-primary-600">e</span>
              <span className="text-purple-500">l</span>
              <span className="text-accent-500">s</span>
            </span>
            <span className="hidden text-sm font-medium text-gray-600 dark:text-gray-400 sm:block">
              Foto & Frame
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute left-2 top-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* CTA Button - Desktop */}
            <Button className="hidden lg:inline-flex" size="sm" href="/contact">
              Contact Us
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="space-y-1 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button className="w-full" href="/contact">
                Contact Us
              </Button>
            </div>
            {/* Mobile contact info */}
            <div className="mt-4 border-t border-gray-200 px-3 pt-4 dark:border-gray-700">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phoneFormatted}
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                {SITE_CONFIG.address.full}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
