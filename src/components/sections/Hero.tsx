"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            {/* Trust badge */}
            <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
              <Star className="h-4 w-4 fill-current" />
              Trusted since {SITE_CONFIG.established}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Preserve Your{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Precious Memories
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Expert photo printing, custom framing, and restoration services.
              Transform your cherished moments into stunning keepsakes that last
              generations.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Explore Services
              </Button>
            </div>

            {/* Location info */}
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>
                Visit us at {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} •{" "}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                >
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </span>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-canyon.jpg"
                alt="Stunning landscape photo print - Horseshoe Bend canyon at sunset"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    19+
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Years of Excellence
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Serving Sandy, Utah
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
