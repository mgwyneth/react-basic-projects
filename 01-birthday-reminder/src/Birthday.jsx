import React from 'react';

const Birthday = (person) => {
  return (
    <article key={person.id} className="person">
      <img src={person.image} alt={person.name}></img>
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
  );
};

export default Birthday;
