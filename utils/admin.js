var admin = require('firebase-admin');

var serviceAccount = process.env.NODE_ENV == 'production' ? require('/etc/secrets/firebase-hidden-key.json') : require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };