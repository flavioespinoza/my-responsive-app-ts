/** @type {import('next').NextConfig} */
const nextConfig = {
	// Removed invalid experimental option
	async redirects() {
		return [
			{
				source: '/',
				destination: '/',
				permanent: false
			}
		]
	}
}

export default nextConfig
