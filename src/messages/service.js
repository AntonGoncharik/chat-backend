const ErrorApp = require('../errors/error-app');

const repository = require('./repository');

const getMessages = async (roomId, page = 1, records = 20) => {
  try {
    if (!roomId) {
      throw new ErrorApp('Not transferred room id', 400);
    }

    const result = await repository.getMessages(roomId, +page, +records);

    return result;
  } catch (error) {
    throw error;
  }
};

const createMessage = async (userId, roomId, text) => {
  try {
    if (!userId) {
      throw new ErrorApp('Not transferred user id', 400);
    }
    if (!roomId) {
      throw new ErrorApp('Not transferred room id', 400);
    }
    if (!text) {
      throw new ErrorApp('Not transferred text message', 400);
    }

    const body = { userId, roomId, text };

    const result = await repository.createMessage(body);

    return result;
  } catch (error) {
    throw error;
  }
};

const updateMessage = async (data) => {
  try {
    if (!data.id) {
      throw new ErrorApp('Not transferred message id', 400);
    }

    const resultMessage = await repository.getMessageById(data.id);

    if (!resultMessage) {
      throw new ErrorApp('Message not found', 404);
    }
    const result = await repository.updateMessage(data.id, data);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async (id) => {
  try {
    if (!id) {
      throw new ErrorApp('Not transferred message id', 400);
    }

    const result = await repository.deleteMessage(id);

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
