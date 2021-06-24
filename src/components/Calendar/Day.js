import React from 'react';
import PropTypes from 'prop-types';
import { format, getDayOfYear, getYear } from 'date-fns';
import filterUniqueMembers from 'src/selectors/uniqueMembers';

function Day({ className, day, widgets, setSelectedDateValue, setRange }) {
  const widgetsOfSpecificDay = widgets?.filter((widget) => {
    if (widget.date_nb === getDayOfYear(day) && widget.year === getYear(day)) {
      return widget;
    }
  });

  const uniqueMembers = filterUniqueMembers(widgetsOfSpecificDay);

  const handleClick = (event) => {
    setSelectedDateValue(format(day, 'yyyy-MM-dd'));
    setRange('day');
  };

  return (
    <div className={className} onClick={handleClick}>
      <span className="day-number">{format(day, 'dd')}</span>
      {uniqueMembers?.map((member) => (
        <div
          className={`calendar-members-concerned color-container--${member.color}`}
          key={member.id}
        >
          <div>{member.firstname[0]}</div>
        </div>
      ))}
    </div>
  );
}

Day.propTypes = {
  className: PropTypes.string,
  day: PropTypes.instanceOf(Date).isRequired,
  widgets: PropTypes.array.isRequired,
  setSelectedDateValue: PropTypes.func.isRequired,
  setRange: PropTypes.func.isRequired,
};

Day.defaultProps = {
  className: '',
};

export default Day;
