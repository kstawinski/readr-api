var admin = require('firebase-admin');
require('dotenv').config();

const envParse = (variable) => variable ? variable.replace(/\\n/g, '\n') : undefined;

admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    projectId: 'readr-ea3d2',
    privateKeyId: envParse(process.env.FIREBASE_PRIVATE_KEY_ID),
    privateKey: envParse(process.env.FIREBASE_PRIVATE_KEY),
    clientEmail: envParse(process.env.FIREBASE_CLIENT_EMAIL),
    clientId: envParse(process.env.FIREBASE_CLIENT_ID),
    authUri: 'https://accounts.google.com/o/oauth2/auth',
    tokenUri: 'https://oauth2.googleapis.com/token',
    authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
    clientX509CertUrl: envParse(process.env.FIREBASE_CLIENT_X509_CERT_URL)
  }),
});

const db = admin.firestore();
module.exports = { admin, db };