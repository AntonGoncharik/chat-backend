const User = require('./model');

const getUserById = async (id) => {
  try {
    const result = await User.findById(id);

    return result;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await User.findOne({ email });

    return result;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const result = await User.find();

    return result;
  } catch (error) {
    throw error;
  }
};

const createUser = async (data) => {
  try {
    const result = await new User(data).save();

    return result;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, data) => {
  try {
    const result = await User.findByIdAndUpdate(id, data, { new: true });

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const result = await User.deleteOne(id);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
