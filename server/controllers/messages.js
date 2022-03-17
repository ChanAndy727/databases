var models = require('../models/messages.js');

module.exports = {
  get: function (req, res) {
    // if (req.url === '/classes')

    models.getAll((err, result) => {
      //error statment

      //else we res.end the stringified result

    });
    //accses data from database and run a query to get all messages
    //respose end with strigifyed messages
  }, // a function which handles a get request for all messages
  post: function (req, res) {

  } // a function which handles posting a message to the database
};
