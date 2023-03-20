/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: [
      "openprocessing-usercontent.s3.amazonaws.com",
      "media.fxhash.xyz",
    ],
  },
};
