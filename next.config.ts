import type {NextConfig} from 'next';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // IMPORTANT: Replace <your-repo-name> with the name of your GitHub repository.
  basePath: repoName ? `/${repoName}` : '',
  assetPrefix: repoName ? `/${repoName}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
