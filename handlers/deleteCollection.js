const { db } = require('../utils/admin.js');

exports.deleteCollection = async (request, reply) => {
  const { uid, collection_id } = request.params;

  await db.collection('collections').doc(collection_id).delete();

  return reply.response().code(204);
};