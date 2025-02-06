const getAllNotificationsByUser = (userId) => {
    return Object.values(normalizedData.entities.notifications)
      .filter((notification) => notification.author === userId)
      .map((notification) => normalizedData.entities.messages[notification.context]);
  };
