const { db } = require('../utils/admin.js');

exports.createNewCollection = async (request, reply) => {
  const { uid } = request.params;

  await db.collection('collections').add({
    text: request.payload.title,
    uid
  })

  return reply.response({
    status: 201,
    message: 'Collection was added successfully!'
  }).code(201);
};