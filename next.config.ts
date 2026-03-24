import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services-2", destination: "/services", permanent: true },
      {
        source: "/works/pubudu",
        destination: "/works/smart-laser",
        permanent: true,
      },
      {
        source: "/works/pubudu-2",
        destination: "/works/cloud-based-pos-system",
        permanent: true,
      },
      {
        source: "/works/peo-lands-2",
        destination: "/works/professional-employee-management-solution",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
