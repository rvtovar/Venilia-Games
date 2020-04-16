const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore()


const userCreated = functions.firestore
  .document('users/{userId}')
  .onCreate((doc, context) => {
    const batch = db.batch()
    const username = doc.data().username
    const { userId } = context.params;
    batch.set(db.collection('usernames')
      .doc(username), {userId}
    )

    return batch.commit()
    
})

const userCheck = (req, res) => {
  if(!req.query.hasOwnProperty('username')) {
    return res
      .status(400)
      .send({
        message: 'No username provided.'
      });
  }

  // Source: https://stackoverflow.com/a/52850529/2758318
  const isValidDocId = id => id
    && /^(?!\.\.?$)(?!.*__.*__)([^/]{1,1500})$/
    .test(id);

  // Document Ids should be non-empty strings
  if(!isValidDocId(req.query.username)) {
    return res.status(400).send({
      body: 'Invalid username string.'
    });
  }

  db
    .collection('usernames')
    .doc(req.query.username)
    .get()
    .then(doc => {
      /** If doc exists, the username is unavailable */
      return res.status(200).send({
        check: !doc.exists
      });
    })
    .catch(error => handleError(req, res));
}

module.exports = {
    userNameCheck: functions.https.onRequest(userCheck),
    userCreated: userCreated
}
