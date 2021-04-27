import { widgetsCombiner } from 'src/selectors/widgetsCombiner';
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
  setUsableColors,
  closeAllInput,
  DELETE_MEMBER,
  UPDATE_PASSWORD,
} from 'src/actions/settings';
import {
  FETCH_DAY_WIDGETS_OF_RANGE,
  setDayWidgetsOfRange,
  FETCH_DISPLAYED_WIDGETS,
  setMonthlyWidgets,
  setWeeklyWidgets,
} from 'src/actions/widget';
import {
  startOfMonth,
  startOfWeek,
  getDaysInMonth,
  getDayOfYear,
  addDays,
  parseISO,
  format,
} from 'date-fns';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUP_DATA: {
      api
        .get('/group-infos')
        .then((result) => result.data.group)
        .then(({ members, name }) => {
          store.dispatch(setGroupData(members, name));
          if (members) {
            for (const member of members) {
              store.dispatch(setMembersToEdit(`id${member.id}`));
            }
            store.dispatch(setUsableColors());
          }
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
            store.dispatch(closeAllInput());
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
      const { dailyWidgets } = store.getState().widget;
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
            store.dispatch(
              setDayWidgetsOfRange(widgetsCombiner(dailyWidgets, widgets))
            );
          }
        });
      return next(action);
    }

    case FETCH_DISPLAYED_WIDGETS: {
      const { range, selectedDateValue } = store.getState().calendar;
      const { monthlyWidgets, weeklyWidgets } = store.getState().widget;
      const year = selectedDateValue.split('-')[0];

      let dateNb = null;

      switch (range) {
        case 'month': {
          dateNb = Number(format(parseISO(selectedDateValue), 'MM'));
          break;
        }
        case 'week': {
          dateNb = Number(format(parseISO(selectedDateValue), 'w'));
          break;
        }
        default:
          break;
      }

      api
        .get(`/dashboard/${year}/${range}/${dateNb}`)
        .then((response) => response.data)
        .then(({ success, widgets }) => {
          if (success && range === 'month') {
            store.dispatch(
              setMonthlyWidgets(widgetsCombiner(monthlyWidgets, widgets))
            );
          }
          if (success && range === 'week') {
            store.dispatch(
              setWeeklyWidgets(widgetsCombiner(weeklyWidgets, widgets))
            );
          }
        });

      return next(action);
    }
    case DELETE_MEMBER: {
      api
        .delete(`/group-settings/member/delete/${action.id}`)
        .then((result) => {
          return result.data;
        })
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
          }
        });
      return next(action);
    }
    case UPDATE_PASSWORD: {
      const { password } = store.getState().settings.memberToChange;
      api
        .patch('/group-settings/member/password', {
          id: action.id,
          password,
        })
        .then((result) => {
          console.log(result.data);
          return result.data;
        });
    }
    default:
      return next(action);
  }
};
