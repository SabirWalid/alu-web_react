import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('markAsRead returns the correct action', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('setNotificationFilter returns the correct action', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  });
});
