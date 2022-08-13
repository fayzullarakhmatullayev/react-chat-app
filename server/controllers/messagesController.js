import MessageModel from "../model/messageModel.js";

export const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await MessageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ message: "Message added successfully!" });
    return res.json({ message: "Failed to add message to the database!" });
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
