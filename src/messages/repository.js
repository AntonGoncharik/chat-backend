const Messages = require('./model');

const getMessageById = async (id) => {
  try {
    const result = await Messages.findById(id, { __v: 0 }).lean();

    return result;
  } catch (error) {
    throw error;
  }
};

const getMessages = async (roomId, page = 1, records = 20) => {
  try {
    const result = await Messages
      .find({ roomId }, { __v: 0 })
      .limit(records)
      .skip(records * (page - 1))
      .lean();

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
    await Messages.deleteOne(id);

    return id;
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
