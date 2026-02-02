"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-primary-600 dark:bg-primary-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Give us a call or stop by our store in Sandy, Utah. Our team is
            ready to help bring your vision to life with expert craftsmanship.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
              href={`tel:${SITE_CONFIG.phone}`}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call {SITE_CONFIG.phoneFormatted}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
              external
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
