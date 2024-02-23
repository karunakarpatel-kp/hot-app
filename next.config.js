/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL,
    ANALYTICS_URL: process.env.ANALYTICS_URL,
    ANALYTICS_ID: process.env.ANALYTICS_ID,
    ADSENSE_URL: process.env.ADSENSE_URL,
    HUGGING_FACE_TOKEN: process.env.HUGGING_FACE_TOKEN,
    STABLE_DIFFUSION_2_1_URL: process.env.STABLE_DIFFUSION_2_1_URL,
    OPEN_JOURNEY_URL: process.env.OPEN_JOURNEY_URL,
    IP_ADAPTER_FACE_ID_URL: process.env.IP_ADAPTER_FACE_ID_URL,
    STABLE_DIFFUSION_1_5_URL: process.env.STABLE_DIFFUSION_1_5_URL,
    STABLE_DIFFUSION_BASE_1_0_URL: process.env.STABLE_DIFFUSION_BASE_1_0_URL,
    EPIC_PHOTOGASM_URL: process.env.EPIC_PHOTOGASM_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cars.tatamotors.com",
      },
    ],
  },
};

module.exports = nextConfig;

// ! ENV File In Here
// HOME_PAGE_BASE_URL=https://domain.in
// ANALYTICS_URL=https://www.googletagmanager.com/gtag/js?id=G-ZZ9QNTCVYC

// ANALYTICS_ID=G-ZZ9QNTCVYC
// ADSENSE_URL=https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3881336361965788

// # Copied & Pasted
// HUGGING_FACE_TOKEN=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
// STABLE_DIFFUSION_2_1_URL=https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1
// OPEN_JOURNEY_URL=https://api-inference.huggingface.co/models/prompthero/openjourney
// IP_ADAPTER_FACE_ID_URL=https://api-inference.huggingface.co/models/h94/IP-Adapter-FaceID
// STABLE_DIFFUSION_1_5_URL=https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5
// STABLE_DIFFUSION_BASE_1_0_URL=https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0
// EPIC_PHOTOGASM_URL=https://api-inference.huggingface.co/models/Yntec/epiCPhotoGasm
