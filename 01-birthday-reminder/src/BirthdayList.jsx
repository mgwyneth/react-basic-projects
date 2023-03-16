import { useState } from 'react';
import data from './data';
import Birthday from './Birthday';

const BirthdayList = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return <Birthday key={person.id} {...person} />;
      })}
      <button onClick={() => setPeople([])}>Clear all</button>
    </>
  );
};

export default BirthdayList;
