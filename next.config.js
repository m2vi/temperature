module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/celsius',
        permanent: true,
      },
    ];
  },
};
