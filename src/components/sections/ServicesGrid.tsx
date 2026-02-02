"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Printer,
  Frame,
  Palette,
  Shirt,
  Sparkles,
  Square,
  ScanLine,
  Camera,
  Film,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  printer: Printer,
  frame: Frame,
  palette: Palette,
  shirt: Shirt,
  sparkles: Sparkles,
  square: Square,
  scan: ScanLine,
  camera: Camera,
  film: Film,
};

export function ServicesGrid() {
  return (
    <section className="bg-white py-16 dark:bg-gray-900 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            Everything you need to preserve and display your most precious memories
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Printer;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={service.href} className="group block h-full">
                  <Card
                    variant="bordered"
                    className="h-full transition-all duration-300 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        {service.popular && (
                          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
                            Popular
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {service.title}
                      </h3>

                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>

                      <div className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
