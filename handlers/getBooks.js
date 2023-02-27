const { db } = require('../utils/admin.js');

exports.getBooks = async (request, reply) => {
  const snapshot = await db.collection('books').where('uid', '==', request.params.uid).get();

  let books = [];
  snapshot.forEach((doc) => {
    let bookID = doc.id;
    let bookData = doc.data();

    books.push({ id: bookID, ...bookData })
  });

  return reply.response(books).code(201);
};