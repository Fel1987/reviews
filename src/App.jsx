import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    if (people.length - 1 === index) {
      return;
    }

    setIndex((currIndex) => currIndex + 1);
  };

  const previousPerson = () => {
    if (!index) {
      return;
    }

    setIndex((currIndex) => currIndex - 1);
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(randomIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>

          <button type="button" className="prev-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={randomPerson}
        >
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default App;
