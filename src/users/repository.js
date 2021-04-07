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

const getUsers = async (page, records) => {
  try {
    const result = await User
      .find()
      .limit(records)
      .skip(records * (page - 1));

    return result;
  } catch (error) {
    throw error;
  }
};

const getCountUsers = async () => {
  try {
    const result = await User.count();

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
  getCountUsers,
  createUser,
  updateUser,
  deleteUser,
};
