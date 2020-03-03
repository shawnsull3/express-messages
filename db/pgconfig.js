const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages',
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
});

function getAll() {
  return (pool.query('SELECT * FROM messages'))
    .then(data => data.rows);
};

function createMessage(name, newMessage) {
  let inputs = [name, newMessage]
  return pool.query('INSERT INTO messages (name, message) VALUES($1, $2)', inputs)
}

function getMessage(id) {
  let input = [id];
  return (pool.query('SELECT * FROM messages WHERE id = $1', input))
    .then(data => data.rows);
};

function update(id, newMessage) {
  let inputs = [id, newMessage];
  return pool.query('UPDATE messages SET message = $2 WHERE id = $1', inputs)
}

function deleteMessage(id) {
  let input = [id];

}

module.exports = {
  pool,
  getAll,
  createMessage,
  getMessage,
  update
};