const { db } = require('../utils/admin.js');

exports.getCollections = async (request, reply) => {
  const snapshot = await db.collection('collections').where('uid', '==', request.params.uid).get();

  let collections = [];
  snapshot.forEach((doc) => {
    let collectionID = doc.id;
    let collectionData = doc.data();

    collections.push({ id: collectionID, ...collectionData })
  });

  return reply.response(collections).code(201);
};