import React, { useEffect, useState } from "react";
import FormQuestion from "./components/FormQuestion";
import FormAnswer from "./components/FormAnswer";



const TriviaApp = () => {

  const quiz = [
    {
      id: 1,
      question: "Siapa nama nabi ke 25?",
      answer: "Muhammad",
    },
    {
      id: 2,
      question: "Dimana ibukota jepang?",
      answer: "Tokyo",
    },
    {
      id: 3,
      question: "Batch kita berapa?",
      answer: "326",
    },
    {
      id: 4,
      question: "Siapa nama panggilan direktur IT BNI?",
      answer: "Pak Toto",
    },
    {
      id: 5,
      question: "Jam berapa istirahat makan siang (dalam angka)?",
      answer: "12",
    },
  ];

  const [question, setQuestion] = useState(quiz[0]);
  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState("");

  function handleChangeQuestion() {
    console.log("Number ", number);
    if (number >= quiz.length) {
      alert("Quiz Selesai");
      return;
    }
    setNumber(number + 1);
    setQuestion(quiz[number - 1]);
    setAnswer("");
    console.log(question);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <FormQuestion question={question} number={number} />
      <FormAnswer
        value={answer}
        setAnswer={setAnswer}
        onChange={(e) => setAnswer(e.target.value)}
        changeQuestion={handleChangeQuestion}
      />
    </div>
  );
};

export default TriviaApp;
