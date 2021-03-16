const repository = require('./repository');

const getMessages = async () => {
  try {
    const messages = await repository.getMessages();

    return messages;
  } catch (error) {
    throw error;
  }
};

const createMessage = async () => {
  try {
    const message = await repository.createMessage();

    return message;
  } catch (error) {
    throw error;
  }
};

const updateMessage = async () => {
  try {
    const message = await repository.updateMessage();

    return message;
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async () => {
  try {
    const message = await repository.deleteMessage();

    return message;
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
