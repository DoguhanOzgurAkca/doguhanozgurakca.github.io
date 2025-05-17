/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/doguhanozgurakca.github.io" : "",
  assetPrefix: isGitHubPages ? "/doguhanozgurakca.github.io/" : "",
  devIndicators: false,
};

module.exports = nextConfig;
