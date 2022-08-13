import MessageModel from "../model/messageModel.js";

export const addMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await MessageModel.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      console.log(msg);
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
        createdAt: msg.createdAt,
      };
    });

    return res.json(projectedMessages);
  } catch (error) {
    next(error);
  }
};
export const getAllMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await MessageModel.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });
    const projectMessages = messages.map((msg) => ({
      fromSelf: msg.sender.toString() === from,
      message: msg.message.text,
    }));

    return res.json(projectMessages);
  } catch (error) {
    next(error);
  }
};
