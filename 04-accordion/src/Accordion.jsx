import { useState } from 'react';
import data from './data';
import Question from './Question';

const QuestionList = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </>
  );
};
export default QuestionList;
