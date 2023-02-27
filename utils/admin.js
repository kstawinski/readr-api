var admin = require('firebase-admin');

const firebaseHiddenKey = '/etc/secrets/firebase-hidden-key.json';
var serviceAccount = process.env.NODE_ENV == 'production' ? require(firebaseHiddenKey).config({ path: `../${firebaseHiddenKey}` }) : require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };