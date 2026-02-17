/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Configure allowed image domains
  images: {
    domains: [
      'ahgnepojdhiarlqwzexv.supabase.co', // Your Supabase storage
      'images.unsplash.com', // For placeholder images
      'avatars.githubusercontent.com', // For GitHub avatars if using GitHub auth
    ],
    // Optional: Configure remote patterns for more control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // Environment variables that will be available on client-side
  env: {
    // Add any public env vars here if needed
    APP_NAME: 'AI Learning Platform',
    APP_VERSION: '1.0.0',
  },

  // Experimental features (use with caution)
  experimental: {
    // Enable server actions for form handling
    serverActions: true,
    
    // Optimize package imports
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-icons',
    ],
    
    // Enable Turbopack for faster development (Next.js 14+)
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Handle audio files for speech recognition
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/i,
      type: 'asset/resource',
    });

    // Handle SVG as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      // Cache static assets
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard/old',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },

  // Rewrites (useful for API proxying)
  async rewrites() {
    return [
      {
        source: '/api/supabase/:path*',
        destination: 'https://ahgnepojdhiarlqwzexv.supabase.co/rest/v1/:path*',
      },
    ];
  },

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    
    // Enable styled-components if you're using it
    // styledComponents: true,
  },

  // Generate ETags for better caching
  generateEtags: true,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // Production build optimization
  swcMinify: true, // Use SWC for minification (faster than Terser)
  
  // Configure build output
  output: 'standalone', // Optimize for container deployments

  // Configure trailing slashes
  trailingSlash: false,

  // Skip TypeScript type checking in production build (use CI instead)
  typescript: {
    ignoreBuildErrors: false, // Set to true to skip type checking during build
  },

  // Skip ESLint during builds
  eslint: {
    ignoreDuringBuilds: false, // Set to true to skip ESLint during build
  },
}

// Bundle analyzer (optional - for analyzing bundle size)
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true }) 
  : (config) => config

// Combine with bundle analyzer if needed
module.exports = withBundleAnalyzer(nextConfig)
