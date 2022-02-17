module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0037f9820bd3a3f2f1761f14a0f0d24a'),
  },
});
