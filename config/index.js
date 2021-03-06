const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? "http://localhost:3002/api/v1" : process.env.NEXT_PUBLIC_API_URL
export const mapsKey = process.env.NEXT_PUBLIC_MAPS_API_KEY
