import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Check,
  Clock,
  DollarSign,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { serviceDetails } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: `${service.description} at ${SITE_CONFIG.name} in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero with Image */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 dark:from-gray-800 dark:to-gray-900 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content - Left Side */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                {service.longDescription}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                {service.startingPrice && (
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <DollarSign className="h-5 w-5 text-primary-600" />
                    <span>
                      Starting at{" "}
                      <strong className="text-gray-900 dark:text-white">
                        {service.startingPrice}
                      </strong>
                    </span>
                  </div>
                )}
                {service.turnaround && (
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span>
                      Turnaround:{" "}
                      <strong className="text-gray-900 dark:text-white">
                        {service.turnaround}
                      </strong>
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
                <Button variant="outline" size="lg" href="/contact">
                  Visit Our Store
                </Button>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative order-first lg:order-last">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary-200 dark:bg-primary-900/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Equipment List */}
      {service.rentalEquipment && (
        <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Equipment &amp; Pricing
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              All prices are per day. Call <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary-600 hover:underline">{SITE_CONFIG.phoneFormatted}</a> to check availability and reserve.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.rentalEquipment.map((category, index) => (
                <Card key={index} variant="default" className="overflow-hidden">
                  <div className="bg-primary-600 px-4 py-3 dark:bg-primary-700">
                    <h3 className="font-semibold text-white">{category.category}</h3>
                  </div>
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Item</th>
                          <th className="px-4 py-2 text-right text-sm font-medium text-gray-600 dark:text-gray-400">Price/Day</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr
                            key={itemIndex}
                            className={`border-b border-gray-100 last:border-0 dark:border-gray-700/50 ${
                              item.discontinued ? "opacity-50" : ""
                            }`}
                          >
                            <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                              {item.name}
                              {item.discontinued && (
                                <span className="ml-2 text-xs text-red-500 line-through">Unavailable</span>
                              )}
                            </td>
                            <td className="px-4 py-2 text-right text-sm font-medium text-gray-900 dark:text-white">
                              {item.discontinued ? (
                                <span className="line-through">${item.pricePerDay}</span>
                              ) : (
                                `$${item.pricePerDay}`
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              A credit card authorization is required for first time rentals. Prices subject to change.
            </p>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Our Process
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Card key={index} variant="default">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    {step.step}
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-6 dark:border-gray-700"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16 dark:bg-primary-900">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Give us a call or stop by our store to discuss your {service.title.toLowerCase()}{" "}
            project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
              href={`tel:${SITE_CONFIG.phone}`}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call {SITE_CONFIG.phoneFormatted}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
