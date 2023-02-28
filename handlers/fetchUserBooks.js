const { db } = require('../utils/admin.js');

exports.fetchUserBooks = async (request, reply) => {
  const { uid } = request.params;
  const snapshot = await db.collection('books').where('uid', '==', uid).get();

  let books = [];
  snapshot.forEach((doc) => {
    let bookID = doc.id;
    let bookData = doc.data();

    books.push({ id: bookID, ...bookData })
  });

  return reply.response(books).code(201);
};