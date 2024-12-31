/** @type {import("next").NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/nord-studio/campsite.chat",
				permanent: true,
			},
			{
				source: "/bluesky",
				destination: "https://bsky.app/profile/campsite.chat",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig
