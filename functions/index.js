const functions = require('firebase-functions');

exports.myFunction = functions.firestore.document('chat/{message}').onCreate((snap, context) => { 
    console.log(snap.data());
});
