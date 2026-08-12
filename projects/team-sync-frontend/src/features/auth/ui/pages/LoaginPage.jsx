import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Check, Sparkles, Globe, Network } from "lucide-react";
import { useAuthHook } from "../../hooks/useAuthHook";

const Login = () => {
  let { register, handleSubmit, errors, onLoginSubmit } = useAuthHook();

  return (
    <div className="min-h-screen bg-[#0d0c11] text-white">
      <div className="flex min-h-screen flex-col overflow-hidden rounded-none border border-white/10 bg-[#111015]">
        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <main className="flex flex-1 flex-col lg:flex-row">
          {/* =====================================================
              LEFT / VISUAL SECTION
          ====================================================== */}
          <section className="relative flex min-h-[24rem] w-full overflow-hidden border-b border-white/10 lg:min-h-0 lg:w-2/5 lg:border-b-0 lg:border-r">
            {/* Background */}
            <div className="absolute inset-0">
              {/* Replace this section with your actual AI image */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#111c35]/70 via-[#111629]/60 to-[#0d0c11]" />

              {/* Ambient glow */}
              <div className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Abstract network lines */}
              <div className="absolute left-[15%] top-[35%] h-px w-3/4 rotate-12 bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent" />

              <div className="absolute left-[5%] top-[50%] h-px w-4/5 -rotate-12 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />

              <div className="absolute left-[20%] top-[60%] h-px w-3/4 rotate-6 bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />

              <div className="absolute left-[40%] top-[25%] h-3/4 w-px rotate-[25deg] bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-indigo-300 shadow-[0_0_80px_30px_rgba(129,140,248,0.2)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
              {/* Brand */}
              <div>
                <h1 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  Synthetic AI
                </h1>
              </div>

              {/* Marketing Content */}
              <div className="mt-auto max-w-md">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  <Sparkles className="h-3.5 w-3.5" />

                  <span>Next-Gen Intelligence</span>
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
              RIGHT / LOGIN SECTION
          ====================================================== */}
          <section className="flex w-full flex-1 items-center justify-center bg-[#111015] px-6 py-12 sm:px-10 lg:w-3/5 lg:px-12">
            <div className="w-full max-w-lg">
              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Welcome back
                </h2>

                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                  Sign in to continue to your intelligence workspace.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onLoginSubmit)}
                className="space-y-5"
              >
                {/* =================================================
                    EMAIL
                ================================================== */}
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

                {/* =================================================
                    PASSWORD
                ================================================== */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block font-medium text-gray-300"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-[12px] font-medium text-violet-300 transition hover:text-violet-200"
                    >
                      Forgot password?
                    </button>
                  </div>

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

                  {errors.password && (
                    <p className="mt-1 text-[10px] text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* =================================================
                    REMEMBER ME
                ================================================== */}
                <div>
                  <label className="flex cursor-pointer items-center gap-2">
                    <span className="relative flex">
                      <input
                        type="checkbox"
                        className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-sm border border-white/20 bg-[#18171c] checked:border-violet-400 checked:bg-violet-500"
                        {...register("remember")}
                      />

                      <Check className="pointer-events-none absolute left-0.5 top-0.5 hidden h-2.5 w-2.5 text-white peer-checked:block" />
                    </span>

                    <span className="text-[10px] text-gray-400">
                      Remember me
                    </span>
                  </label>
                </div>

                {/* =================================================
                    LOGIN BUTTON
                ================================================== */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-r from-violet-500 to-violet-300 px-4 py-2.5 text-xs font-semibold text-[#17131e] shadow-lg shadow-violet-500/10 transition hover:brightness-110 active:scale-[0.99] cursor-pointer"
                >
                  Sign In
                </button>

                {/* =================================================
                    DIVIDER
                ================================================== */}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-[8px] uppercase tracking-widest text-gray-600">
                    Or continue with
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* =================================================
                    SOCIAL LOGIN
                ================================================== */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#151419] px-4 py-2.5 text-xs font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/5"
                  >
                    <Globe className="h-3.5 w-3.5" />

                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#151419] px-4 py-2.5 text-xs font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/5"
                  >
                    <Network className="h-3.5 w-3.5" />

                    <span>SSO</span>
                  </button>
                </div>

                {/* =================================================
                    REGISTER
                ================================================== */}
                <p className="pt-4 text-center text-xs text-gray-400">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="font-medium text-violet-300 transition hover:text-violet-200"
                  >
                    Create an account
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

export default Login;
