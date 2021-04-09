const User = require('./model');

const getUserById = async (id) => {
  try {
    const result = await User.findById(id, { __v: 0, password: 0 }).lean();

    return result;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await User.findOne({ email }, { __v: 0 }).lean();

    return result;
  } catch (error) {
    throw error;
  }
};

const getUsers = async (page, records) => {
  try {
    const result = await User
      .find({}, { __v: 0, password: 0 })
      .limit(records)
      .skip(records * (page - 1))
      .lean();

    return result;
  } catch (error) {
    throw error;
  }
};

const getCountUsers = async () => {
  try {
    const result = await User.count().lean();

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
    await User.deleteOne(id);

    return id;
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
