'use strict';

const people = require('./lib/people');
const tableRow = document.querySelector('.dashboard').firstElementChild;

people.forEach(person => {
  const { name: fullName, sex, born, died } = person;

  tableRow.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${fullName}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
  `);
});
