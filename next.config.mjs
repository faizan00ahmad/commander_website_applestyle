/** @type {import('next').NextConfig} */
// Static export: `next build` writes a plain HTML/CSS/JS site to ./out that any web server (IIS, Apache, Nginx) can host.
// To host inside a sub-folder (e.g. https://example.com/commander-group/) build with NEXT_PUBLIC_BASE_PATH=/commander-group.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  // Lets a build use its own work folder (BUILD_DIR=.build) when a dev server is holding .next open.
  distDir: process.env.BUILD_DIR || ".next",
};
export default nextConfig;
