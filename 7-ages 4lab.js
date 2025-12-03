'use strict';

const people = {
  "Einstein": { born: 1879, died: 1955 },
  "Newton": { born: 1643, died: 1727 },
  "Curie": { born: 1867, died: 1934 },
  "Nicola Tesla": { born: 1856, died: 1943 },
  "Ada Lovelace": { born: 1815, died: 1852 },
  };

const ages = (people) => {
  const result = {};
for (const name in people) {
    const person = people[name];
    result[name] = person.died - person.born;
  }
  return result;
};

const lifespans = ages(people);
console.log(lifespans);
console.table(lifespans);
