/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async edirects() {
    return [
      {
        source: '/mutual-funds.html',
        destination: '/mutual_funds',
        permanent: true
      }
    ]
  }
}
