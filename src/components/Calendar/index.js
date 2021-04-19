import React from 'react';
import './styles.scss';

export default function Calendar() {
  const monthArray = new Array(31);
  monthArray.fill('jour');

  return (
    <div className="month">
      {monthArray.map((day) => (
        <div className="month--day">
          <span>{day}</span>
        </div>
      ))}
    </div>
  );
}
