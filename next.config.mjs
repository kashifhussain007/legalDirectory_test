/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/legal_dir",
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "es"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["example.com", "another-example.com"],
  },
};

export default nextConfig;
