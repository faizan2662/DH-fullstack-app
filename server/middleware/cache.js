const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.error('Redis error:', err));

function cache(req, res, next) {
  const { id } = req.params;
  client.get(id, (err, data) => {
    if (err) throw err;
    if (data) return res.json(JSON.parse(data));
    next();
  });
}

module.exports = { client, cache };
