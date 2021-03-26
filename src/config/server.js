module.exports = {
  port: 8080,
  cors: {
    origin: '*',
    methods: [
      'GET',
      'HEAD',
      'PUT',
      'PATCH',
      'POST',
      'DELETE',
    ],
    allowedHeaders: [
      'Accept',
      'Content-Length',
      'Content-Type',
      'Authorization',
      'boundary',
    ],
    preflightContinue: false,
  },
};
