import api from 'src/api';
import {
  FETCH_GROUP_DATA,
  setGroupData,
  UPDATE_GROUP_NAME,
  setGroupName,
  setMembersToEdit,
  UPDATE_MEMBER,
  ADD_NEW_MEMBER,
  fetchGroupData,
  assignMemberToCloseInputView,
  setUsableColors,
} from 'src/actions/settings';
import {
  FETCH_DAY_WIDGETS_OF_RANGE,
  setDayWidgetsOfRange,
} from 'src/actions/widget';
import {
  startOfMonth,
  startOfWeek,
  getDaysInMonth,
  getDayOfYear,
  addDays,
  parseISO,
} from 'date-fns';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUP_DATA: {
      api
        .get('/group-infos')
        .then((result) => {
          console.log('ça marche');
          console.log(result.data.group);
          return result.data.group;
        })
        .then(({ members, name }) => {
          store.dispatch(setGroupData(members, name));
          for (const member of members) {
            store.dispatch(setMembersToEdit(`id${member.id}`));
          }
          store.dispatch(setUsableColors());
        });
      return next(action);
    }
    case UPDATE_GROUP_NAME: {
      const { groupNameToChange } = store.getState().settings;
      api
        .patch('/group-settings/group', { groupName: groupNameToChange })
        .then((result) => result.data)
        .then(({ updated }) => {
          if (updated) {
            store.dispatch(setGroupName());
          }
        });
      return next(action);
    }
    case UPDATE_MEMBER: {
      const {
        id,
        firstname,
        email,
        password,
        icon,
        role,
      } = store.getState().settings.memberToChange;
      api
        .patch('/group-settings/members', {
          id,
          firstname,
          email,
          password,
          icon,
          role: Number(role),
        })
        .then((result) => result.data)
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
            store.dispatch(assignMemberToCloseInputView(id));
          }
        });
      return next(action);
    }
    case ADD_NEW_MEMBER: {
      const {
        firstname,
        email,
        password,
        icon,
        role,
      } = store.getState().settings.newMember;
      api
        .post('/group-settings', {
          firstname,
          email,
          password,
          icon,
          role: Number(role),
        })
        .then((result) => {
          console.log(result.data);
          return result.data;
        })
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
          }
        });
      return next(action);
    }

    case FETCH_DAY_WIDGETS_OF_RANGE: {
      const { range, selectedDateValue } = store.getState().calendar;
      const { calendarWidgets } = store.getState().widget;
      console.log('calendarWidgets:', calendarWidgets);
      const year = selectedDateValue.split('-')[0];
      const formattedISODate = addDays(parseISO(selectedDateValue), 0);
      let rangeStart = startOfMonth(formattedISODate);
      let numberOfDaysInRange = getDaysInMonth(formattedISODate);

      if (range === 'week') {
        rangeStart = startOfWeek(formattedISODate);
        numberOfDaysInRange = 7;
      }

      const rangeStartDayNb = getDayOfYear(rangeStart);
      const dateContainer = new Array(numberOfDaysInRange).fill(undefined);
      const dayNumbers = dateContainer.map(
        (element, index) => rangeStartDayNb + index
      );

      api
        .post(`/dashboard/days/${year}`, {
          dayNumbers,
        })
        .then((result) => result.data)
        .then(({ success, widgets }) => {
          if (success) {
            const combinedWidgets = [...calendarWidgets, ...widgets];
            const allWidgetUniqueIds = [
              ...new Set(combinedWidgets.map((widget) => widget.id)),
            ];
            const allUniqueWidgets = allWidgetUniqueIds.map((id) =>
              combinedWidgets.find((widget) => widget.id === id)
            );
            console.log('allUniqueWidgets:', allUniqueWidgets);
            store.dispatch(setDayWidgetsOfRange(allUniqueWidgets));
          }
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
