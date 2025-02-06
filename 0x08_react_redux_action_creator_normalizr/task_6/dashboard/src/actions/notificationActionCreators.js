import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

const markAsRead = (index) => {
  return { type: MARK_AS_READ, index };
};

const setNotificationFilter = (filter) => {
  return { type: SET_TYPE_FILTER, filter };
};

export { markAsRead, setNotificationFilter };
