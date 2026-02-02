"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function LocationSection() {
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`;

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 lg:aspect-square"
          >
            {/* Embed Google Maps or use a static map image */}
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pixels Foto & Frame Location"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Visit Our Store
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Stop by our Sandy, Utah location to see our work in person and discuss
              your project with our experienced team.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Address
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                    {SITE_CONFIG.address.zip}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="mt-1 block text-primary-600 hover:text-primary-700 dark:text-primary-400"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Hours
                  </h3>
                  <div className="mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                    <p>Monday - Friday: {SITE_CONFIG.hours.weekdays}</p>
                    <p>Saturday: {SITE_CONFIG.hours.saturday}</p>
                    <p>Sunday: {SITE_CONFIG.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href={mapUrl} external>
                Get Directions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
