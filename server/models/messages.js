var db = require('../db');

module.exports = {
  getAll: function (callback) {
    const queryString = 'SELECT * FROM messages;';

    var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                    from messages left outer join users on (messages.userid = users.id) \
                    order by messages.id desc';
    db.query(queryString, (err, result, field) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
