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
  let value = [id];
  return (pool.query('SELECT * FROM messages WHERE id = $1', value))
    .then(data => data.rows);
};

module.exports = {
  pool,
  getAll,
  createMessage,
  getMessage
};