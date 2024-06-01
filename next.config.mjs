import {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
const nextConfig = async (phase) => {
    /** @type {import("next").NextConfig} */

    // future configurations
    const nextConfig = {

    };

    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
        const withSerwist = (await import("@serwist/next")).default({
            swSrc: "public/service-worker/app-worker.ts",
            swDest: "public/sw.js",
            reloadOnOnline: true,
        });
        return withSerwist(nextConfig);
    }

    return nextConfig;
};

export default nextConfig;
