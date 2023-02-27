'use strict';
const Hapi = require('@hapi/hapi');

// Handlers
const { getBooks } = require('./handlers/getBooks')
const { db } = require('./utils/admin.js');

const init = async () => {
  const server = Hapi.server({
    port: process.env.RENDER_PORT || 3030,
    host: process.env.RENDER_HOST || 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/books/{uid}',
    handler: getBooks
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return reply.response('API is working!').code(201);
    } 
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();