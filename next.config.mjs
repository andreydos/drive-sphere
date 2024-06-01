/** @type {import('next').NextConfig} */
import runtimeCaching from "next-pwa/cache.js";
import nextPWA from "next-pwa";
const withPWA = nextPWA({
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    skipWaiting: false,
    runtimeCaching,
});
const nextConfig = withPWA({});

export default nextConfig;
