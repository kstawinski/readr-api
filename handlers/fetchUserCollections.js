const { db } = require('../utils/admin.js');

exports.fetchUserCollections = async (request, reply) => {
  const { uid } = request.params;
  const snapshot = await db.collection('collections').where('uid', '==', uid).get();

  let collections = [];
  snapshot.forEach((doc) => {
    let collectionID = doc.id;
    let collectionData = doc.data();

    collections.push({ id: collectionID, ...collectionData })
  });

  return reply.response(collections).code(200);
};