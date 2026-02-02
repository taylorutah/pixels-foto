import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_CONFIG.name}. Visit our store in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} or call us at ${SITE_CONFIG.phoneFormatted}.`,
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Stop by our store or give us a call. We&apos;d love to help with your
            next project.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center dark:bg-gray-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Phone className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Call Us
              </h2>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="mt-2 text-2xl font-bold text-primary-600 hover:text-primary-700 dark:text-primary-400"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We&apos;re here to help
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center dark:bg-gray-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <MapPin className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Visit Us
              </h2>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-gray-600 hover:text-primary-600 dark:text-gray-400"
              >
                <span className="block font-medium text-gray-900 dark:text-white">
                  {SITE_CONFIG.address.street}
                </span>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                {SITE_CONFIG.address.zip}
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Free parking available
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center dark:bg-gray-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Clock className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Hours
              </h2>
              <div className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Mon-Fri:
                  </span>{" "}
                  {SITE_CONFIG.hours.weekdays}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Saturday:
                  </span>{" "}
                  {SITE_CONFIG.hours.saturday}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Sunday:
                  </span>{" "}
                  {SITE_CONFIG.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pixels Foto & Frame Location"
            />
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Questions about our services? Give us a call at{" "}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
