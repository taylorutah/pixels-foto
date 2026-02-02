import type { Metadata } from "next";
import Link from "next/link";
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
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Professional photo printing, custom framing, photo restoration, and more at ${SITE_CONFIG.name}. Serving ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} since ${SITE_CONFIG.established}.`,
};

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

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 dark:from-gray-800 dark:to-gray-900 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            From photo printing to custom framing, we offer a complete range of
            services to preserve and display your most precious memories.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Printer;

              return (
                <Link key={service.id} href={service.href} className="group">
                  <Card
                    variant="bordered"
                    className="h-full transition-all duration-300 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                          <Icon className="h-7 w-7" />
                        </div>
                        {service.popular && (
                          <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
                            Popular
                          </span>
                        )}
                      </div>

                      <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {service.title}
                      </h2>

                      <p className="mb-6 text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>

                      <div className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Give us a call or stop by our store. Our team will help you find the
            perfect solution for your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" href={`tel:${SITE_CONFIG.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Visit Our Store
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
