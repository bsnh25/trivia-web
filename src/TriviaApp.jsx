import React, { useEffect, useState } from "react";
import FormQuestion from "./components/FormQuestion";
import FormAnswer from "./components/FormAnswer";

const TriviaApp = () => {
  const quiz = [
    {
      id: 1,
      question: "Siapa nama nabi ke 25?",
      answer: "Muhammad",
      isCorrect: false,
    },
    {
      id: 2,
      question: "Dimana ibukota jepang?",
      answer: "Tokyo",
      isCorrect: false,
    },
    {
      id: 3,
      question: "Batch kita berapa?",
      answer: "326",
      isCorrect: false,
    },
    {
      id: 4,
      question: "Siapa nama panggilan direktur IT BNI?",
      answer: "Pak Toto",
      isCorrect: false,
    },
    {
      id: 5,
      question: "Jam berapa istirahat makan siang (dalam angka)?",
      answer: "12",
      isCorrect: false,
    },
  ];

  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState(quiz[number]);
  const [answer, setAnswer] = useState("");
  const [answerCollection, setAnswerCollection] = useState([]);

  useEffect(() => {
    setQuestion(quiz[number]);
    setNumber(1);
  }, []);

  function handleChangeQuestion() {
    console.log("Number ", number);
    setQuestion({
      ...question,
      isCorrect: question.answer == answer ? true : false,
    });
    if (number >= quiz.length) {
      let i = 0;
      quiz.map((e) => {
        if (e.isCorrect) {
          i += 20;
        }
        return i;
      });
      alert("Quiz Selesai, kamu benar ", i);

      return;
    }
    setNumber(number + 1);
    setQuestion(quiz[number]);
    setAnswer("");
    console.log(question);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <FormQuestion question={question} number={number} />
      <FormAnswer
        value={answer}
        setAnswer={setAnswer}
        changeQuestion={handleChangeQuestion}
      />
    </div>
  );
};

export default TriviaApp;
