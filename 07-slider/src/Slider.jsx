import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Review from './Review';
import data from './data';

const slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkIndex(index + 1));
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const checkIndex = (index) => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      return lastIndex;
    }
    if (index > lastIndex) {
      return 0;
    }
    return index;
  };

  const nextSlide = (direction) => {
    setIndex((index) => {
      const newIndex = index + direction;
      return checkIndex(newIndex);
    });
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastIndex';
          }
          return <Review key={person.id} {...person} position={position} />;
        })}
        <button className="prev" onClick={() => nextSlide(-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => nextSlide(+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
export default slider;
