import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  ShoppingBag,
} from "lucide-react";
import { NavLink } from "react-router";
import ProductCard from "../../../features/product/ui/components/ProductCard";

const HomePage = ({ products, categories }) => {

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div>
              <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                New Collection
              </span>

              <h1 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Everything you need,
                <span className="block text-red-500">all in one place.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
                Discover quality products at great prices. Shop electronics,
                fashion, beauty, furniture and more from our growing collection.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <NavLink
                  to="/main/product"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </NavLink>

                <NavLink
                  to="/main/about"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                  Learn More
                </NavLink>
              </div>

              {/* Small Stats */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-800 pt-6">
                <div>
                  <p className="text-xl font-bold text-white">1000+</p>
                  <p className="text-xs text-gray-500">Products</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white">24/7</p>
                  <p className="text-xs text-gray-500">Support</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white">100%</p>
                  <p className="text-xs text-gray-500">Secure Shopping</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl sm:p-8">
                {/* Background Decoration */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-red-600/5 blur-3xl" />

                <div className="relative">
                  {/* Fake Product Showcase */}
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-gray-800 bg-gray-950">
                    <ShoppingBag className="h-32 w-32 text-red-600 sm:h-40 sm:w-40" />
                  </div>

                  {/* Floating Product Info */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-700 bg-gray-900/95 p-4 backdrop-blur-sm sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-red-500">
                          Featured
                        </p>

                        <h2 className="mt-1 text-sm font-semibold text-white sm:text-base">
                          Discover something you love
                        </h2>
                      </div>

                      <NavLink
                        to="/main/product"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700"
                        aria-label="Shop products"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-red-500">
                Browse
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Shop by Category
              </h2>
            </div>

            <NavLink
              to="/main/product"
              className="hidden items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-white sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories?.map((category) => (
              <NavLink
                key={category.slug}
                to={`/main/product?category=${category.slug}`}
                className="group rounded-xl border border-gray-800 bg-gray-900 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-950 text-2xl">
                  {category.emoji}
                </div>

                <h3 className="mt-3 text-sm font-semibold text-gray-200 transition-colors group-hover:text-white">
                  {category.name}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-xs text-gray-500 transition-colors group-hover:text-red-400">
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                <Truck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Fast Delivery</h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Get your orders delivered quickly and safely.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Secure Shopping</h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Your shopping experience is safe and secure.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                <Headphones className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Customer Support</h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  We're here whenever you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}
      {products?.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-red-500">
                  Featured
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Popular Products
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Take a look at some of our most popular products.
                </p>
              </div>

              <NavLink
                to="/main/product"
                className="hidden items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-white sm:flex"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Mobile View All */}
            <div className="mt-6 sm:hidden">
              <NavLink
                to="/main/product"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-gray-800 hover:text-white"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
            <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />

              <div className="relative">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to start shopping?
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                  Explore our collection and find products that fit your
                  lifestyle.
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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
