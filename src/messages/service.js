const repository = require('./repository');

const getMessages = async () => {
  try {
    const result = await repository.getMessages();

    return result;
  } catch (error) {
    throw error;
  }
};

const createMessage = async () => {
  try {
    const result = await repository.createMessage();

    return result;
  } catch (error) {
    throw error;
  }
};

const updateMessage = async () => {
  try {
    const result = await repository.updateMessage();

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async () => {
  try {
    const result = await repository.deleteMessage();

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
};
