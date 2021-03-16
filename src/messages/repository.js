const Messages = require('./model');

const getMessageById = async (id) => {
  try {
    const result = await Messages.findById(id);

    return result;
  } catch (error) {
    throw error;
  }
};

const getMessages = async () => {
  try {
    const result = await Messages.find();

    return result;
  } catch (error) {
    throw error;
  }
};

const createMessage = async (data) => {
  try {
    const result = await new Messages(data).save();

    return result;
  } catch (error) {
    throw error;
  }
};

const updateMessage = async (id, data) => {
  try {
    const result = await Messages.findByIdAndUpdate(id, data, { new: true });

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async (id) => {
  try {
    const result = await Messages.deleteOne(id);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMessageById,
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
};
