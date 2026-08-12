import React from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Lock,
  Check,
  ShieldCheck,
  Sparkles,
  Globe,
  Network,
} from "lucide-react";
import { useAuthHook } from "../../hooks/useAuthHook";

const Register = () => {
  let { register, handleSubmit, onRegisterSubmit, watch, errors } =
    useAuthHook();
  const password = watch("password", "");

  const passwordStrength =
    password.length >= 8
      ? password.length >= 12
        ? "strong"
        : "medium"
      : "weak";

  return (
    <div className="min-h-screen bg-[#0d0c11] text-white">
      <div className="flex min-h-screen flex-col overflow-hidden rounded-none border border-white/10 bg-[#111015]">
        {/* Main Content */}
        <main className="flex flex-1 flex-col lg:flex-row">
          {/* =====================================================
              LEFT / VISUAL SECTION
          ====================================================== */}
          <section className="relative flex min-h-96 w-full overflow-hidden border-b border-white/10 lg:min-h-0 lg:w-2/5 lg:border-b-0 lg:border-r">
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#111c35]/70 via-[#111629]/60 to-[#0d0c11]" />

              {/* Abstract neural-network-like background */}
              <div className="absolute inset-0 opacity-70">
                <div className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-indigo-300 shadow-[0_0_80px_30px_rgba(129,140,248,0.2)]" />

                <div className="absolute left-[15%] top-[35%] h-px w-3/4 rotate-12 bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent" />

                <div className="absolute left-[5%] top-[50%] h-px w-4/5 -rotate-12 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />

                <div className="absolute left-[20%] top-[60%] h-px w-3/4 rotate-6 bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />

                <div className="absolute left-[40%] top-[25%] h-3/4 w-px rotate-[25deg] bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent" />
              </div>
            </div>

            {/* Brand */}
            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
              <div>
                <h1 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  Synthetic AI
                </h1>
              </div>

              {/* Marketing Content */}
              <div className="mt-auto max-w-md">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Next-Gen Intelligence
                </div>

                <h2 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  Accelerate your team's intelligence.
                </h2>

                <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-300 sm:text-sm">
                  Connect your enterprise data to our specialized AI models and
                  unlock unparalleled strategic insights in seconds.
                </p>

                {/* Stats */}
                <div className="mt-8 flex gap-8">
                  <div>
                    <p className="text-lg font-bold text-gray-300">99.9%</p>
                    <p className="text-[9px] text-gray-500">Uptime SLA</p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-gray-300">ISO</p>
                    <p className="text-[9px] text-gray-500">27001 Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT / REGISTER SECTION
          ====================================================== */}
          <section className="flex w-full flex-1 items-center justify-center bg-[#111015] px-6 py-12 sm:px-10 lg:w-3/5 lg:px-12">
            <div className="w-full max-w-lg">
              {/* Heading */}
              <div className="mb-7">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Create your account
                </h2>

                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                  Experience the future of collaborative data intelligence.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onRegisterSubmit)}
                className="space-y-5"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block font-medium text-gray-300"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-600" />

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full rounded-md border bg-[#18171c] py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-gray-600 outline-none transition focus:ring-1 ${
                        errors.fullName
                          ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-violet-400/60 focus:ring-violet-400/20"
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.fullName && (
                    <p className="mt-1 text-[10px] text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-600" />

                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className={`w-full rounded-md border bg-[#18171c] py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-gray-600 outline-none transition focus:ring-1 ${
                        errors.email
                          ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-violet-400/60 focus:ring-violet-400/20"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-[10px] text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block font-medium text-gray-300"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-600" />

                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className={`w-full rounded-md border bg-[#18171c] py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-gray-600 outline-none transition focus:ring-1 ${
                        errors.password
                          ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-violet-400/60 focus:ring-violet-400/20"
                      }`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                  </div>

                  {/* Password Strength */}
                  <div className="mt-1">
                    <div className="flex gap-1">
                      <span
                        className={`h-0.5 flex-1 rounded ${
                          password.length >= 1
                            ? passwordStrength === "weak"
                              ? "bg-red-400"
                              : "bg-violet-400"
                            : "bg-gray-800"
                        }`}
                      />

                      <span
                        className={`h-0.5 flex-1 rounded ${
                          password.length >= 8 ? "bg-violet-400" : "bg-gray-800"
                        }`}
                      />

                      <span
                        className={`h-0.5 flex-1 rounded ${
                          password.length >= 12
                            ? "bg-violet-400"
                            : "bg-gray-800"
                        }`}
                      />
                    </div>

                    <p
                      className={`mt-1 text-sm ${
                        passwordStrength === "strong"
                          ? "text-violet-300"
                          : passwordStrength === "medium"
                            ? "text-violet-300"
                            : "text-gray-500"
                      }`}
                    >
                      {password
                        ? `${passwordStrength} password`
                        : "Strong password"}
                    </p>
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-[10px] text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div>
                  <label className="flex cursor-pointer items-start gap-2">
                    <span className="relative mt-0.5 flex">
                      <input
                        type="checkbox"
                        className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-sm border border-white/20 bg-[#18171c] checked:border-violet-400 checked:bg-violet-500"
                        {...register("terms", {
                          required: "You must accept the terms",
                        })}
                      />

                      <Check className="pointer-events-none absolute left-0.5 top-0.5 hidden h-2.5 w-2.5 text-white peer-checked:block" />
                    </span>

                    <span className="text-[9px] leading-relaxed text-gray-400">
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-violet-300 hover:text-violet-200"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-violet-300 hover:text-violet-200"
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>
                  </label>

                  {errors.terms && (
                    <p className="mt-1 text-[10px] text-red-400">
                      {errors.terms.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-r from-violet-500 to-violet-300 px-4 py-2.5 text-xs font-semibold text-[#17131e] shadow-lg shadow-violet-500/10 transition hover:brightness-110 active:scale-[0.99]"
                >
                  Create Account
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-[8px] uppercase tracking-widest text-gray-600">
                    Or continue with
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#151419] px-4 py-2.5 text-xs font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/5"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Google
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#151419] px-4 py-2.5 text-xs font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/5"
                  >
                    <Network className="h-3.5 w-3.5" />
                    SSO
                  </button>
                </div>

                {/* Login */}
                <p className="pt-3 text-center text-xs text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-medium text-violet-300 hover:text-violet-200"
                  >
                    Log In
                  </button>
                </p>
              </form>
            </div>
          </section>
        </main>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer className="border-t border-white/10 bg-[#111015] px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div className="text-sm font-semibold text-white">Synthetic AI</div>

            {/* Links */}
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] text-gray-400">
              <button className="transition hover:text-white">
                Privacy Policy
              </button>

              <button className="transition hover:text-white">
                Terms of Service
              </button>

              <button className="transition hover:text-white">Security</button>

              <button className="transition hover:text-white">
                System Status
              </button>
            </nav>

            {/* Copyright */}
            <p className="text-[9px] text-gray-500">
              © 2024 Synthetic AI. Enterprise Intelligence Platforms.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;
