import React from "react";
import { NavLink } from "react-router";
import {
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div>
              <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                About Our Store
              </span>

              <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Shopping made
                <span className="block text-red-500">simple & better.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                We believe online shopping should be simple, convenient, and
                enjoyable. Our goal is to bring quality products together in one
                place while making your shopping experience effortless.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <NavLink
                  to="/main/product"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700"
                >
                  Start Shopping
                  <ArrowRight className="h-4 w-4" />
                </NavLink>

                <NavLink
                  to="/main"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                  Back to Home
                </NavLink>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl sm:p-8">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />

                <div className="relative">
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-gray-800 bg-gray-950">
                    <ShoppingBag className="h-28 w-28 text-red-600 sm:h-36 sm:w-36" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-700 bg-gray-900/95 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/10">
                        <HeartHandshake className="h-5 w-5 text-red-500" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Built for shoppers
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Quality, convenience and trust.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Heading */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-red-500">
                Our Story
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                More than just an online store.
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-5 text-sm leading-7 text-gray-400 sm:text-base">
              <p>
                Our store was created with one simple idea: make it easier for
                people to discover and purchase products they love without
                unnecessary complexity.
              </p>

              <p>
                From everyday essentials to electronics, fashion, beauty, and
                home products, we bring a diverse collection together in one
                convenient shopping experience.
              </p>

              <p>
                We focus on creating a clean, reliable, and user-friendly
                experience where customers can browse products, explore
                categories, and shop with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10">
                <Target className="h-6 w-6 text-red-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">Our Mission</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                To create a simple and reliable shopping experience where
                customers can discover quality products quickly and confidently.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10">
                <Users className="h-6 w-6 text-red-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">Our Vision</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                To build a shopping platform that people can rely on for
                variety, convenience, transparency, and excellent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-red-500">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Shopping you can count on.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Everything we do is focused on making your shopping experience
              easier and more reliable.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10">
                <ShieldCheck className="h-5 w-5 text-red-500" />
              </div>

              <h3 className="mt-5 font-semibold text-white">Secure Shopping</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Shop confidently with a secure and reliable experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10">
                <Truck className="h-5 w-5 text-red-500" />
              </div>

              <h3 className="mt-5 font-semibold text-white">Fast Delivery</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Get your orders delivered quickly and safely to your door.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10">
                <ShoppingBag className="h-5 w-5 text-red-500" />
              </div>

              <h3 className="mt-5 font-semibold text-white">Wide Selection</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Explore products across multiple categories in one place.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10">
                <HeartHandshake className="h-5 w-5 text-red-500" />
              </div>

              <h3 className="mt-5 font-semibold text-white">Customer First</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Your satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-gray-800 md:grid-cols-4">
            <div className="px-4 text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">1000+</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Products</p>
            </div>

            <div className="px-4 text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">20+</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Categories
              </p>
            </div>

            <div className="border-t border-gray-800 px-4 pt-6 text-center md:border-t-0 md:pt-0">
              <p className="text-2xl font-bold text-white sm:text-3xl">24/7</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Support</p>
            </div>

            <div className="border-t border-gray-800 px-4 pt-6 text-center md:border-t-0 md:pt-0">
              <p className="text-2xl font-bold text-white sm:text-3xl">100%</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to find your next favorite product?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Browse our collection and discover something you'll love.
              </p>

              <NavLink
                to="/main/product"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
