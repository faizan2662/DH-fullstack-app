const User = require('../models/User');
const { client } = require('../middleware/cache');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findById(id);
    client.setex(id, 600, JSON.stringify(user)); // Cache for 10 minutes
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser };
