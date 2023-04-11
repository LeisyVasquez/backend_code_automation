
const admin = require("firebase-admin");

const serviceAccount = require("../../infrastructure/config/service_account_key_firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin; 
