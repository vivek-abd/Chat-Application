// Only the name of user
export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

// Complete user profile
export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

// Is sender of two consecutive messages same
export const isSameSender = (messages, m, i, userId) => {
  /* 
    i is less than length of messages &&
    (sender of next message is not same as sender of current message ||
      next message is undefined [current message is last message] ) &&
    sender of current message is not loggedin user
  */
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

// Is the message last message of opposite user
export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

// Decide margin for sent and received messages
export const isSameSenderMargin = (messages, m, i, userId) => {
  // sender same as next message && is not the loggedin user, set margin to 33 (to align with dp width)
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender.id &&
    messages[i].sender._id !== userId
  )
    return 33;

  // sender not same same as next message && not the loggedin user no need of margin (dp will be displayed on left)
  if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;

  // sender is loggedin user
  return "auto";
};

// Apply margin between two messages if both sent by same user
export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
