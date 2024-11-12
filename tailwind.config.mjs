/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "primary-100": "oklch(73.37% 0.1303 267.64)",
        "primary-200": "oklch(64.54% 0.1834 266.13)",
        "primary-400": "oklch(56.32% 0.2147 265.93)",
        "primary-600": "oklch(49.19% 0.2422 265.98)",

        // Secondary colors
        "secondary-200": "oklch(95.47% 0.0128 266.7)",
        "secondary-300": "oklch(92.36% 0.0163 262.75)",
        "secondary-400": "oklch(88.75% 0.0219 265.75)",
        "secondary-500": "oklch(75.71% 0.0487 266.58)",
        "secondary-600": "oklch(67.36% 0.042 267.77)",

        // Tertiary colors
        "tertiary-200": "oklch(26.01% 0.0496 272.68)",
        "tertiary-300": "oklch(23.7% 0.0411 272.73)",
        "tertiary-400": "oklch(21.09% 0.0404 271.92)",
        "tertiary-500": "oklch(19.74% 0.0368 273.1)",
        "tertiary-600": "oklch(16.27% 0.0259 272.54)",
        "tertiary-700": "oklch(11.76% 0.0292 263.44)",
      },
      fontSize: {
        h1: "70px",
        h2: "55px",
        h3: "35px",
        subtitle: "24px",
        body: "16px",
        small: "14px",
        cta: "16px",
      },
    },
  },
  plugins: [],
};
