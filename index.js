'use strict';
const Hapi = require('@hapi/hapi');

// Handlers
const { fetchUserBooks } = require('./handlers/fetchUserBooks');
const { fetchUserCollections } = require('./handlers/fetchUserCollections');
const { createNewCollection } = require('./handlers/createNewCollection');
const { deleteCollection } = require('./handlers/deleteCollection');

const init = async () => {
  const server = Hapi.server({
    port: process.env.RENDER_PORT || 3030,
    host: process.env.RENDER_HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*']          
      }
    }
  });

  // Fetch books by user ID
  server.route({
    method: 'GET',
    path: '/books/{uid}',
    handler: fetchUserBooks
  });

  // Fetch collections by user ID
  server.route({
    method: 'GET',
    path: '/collections/{uid}',
    handler: fetchUserCollections
  });

  // Add new collection
  server.route({
    method: 'POST',
    path: '/collections/{uid}',
    handler: createNewCollection
  });

  // Remove collection
  server.route({
    method: 'DELETE',
    path: '/collections/{uid}/{collection_id}',
    handler: deleteCollection
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