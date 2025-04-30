import React, { useEffect, useState } from "react";
import FormQuestion from "./components/FormQuestion";
import FormAnswer from "./components/FormAnswer";

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

const TriviaApp = () => {
  const [question, setQuestion] = useState(quiz[0]);
  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {});

  //   function handleChangeQuestion() {
  //     console.log("Number ", number);
  //     setNumber(number + 1);
  //     if (number > 5) {
  //       console.log(number);
  //       console.log("Ini di handle");
  //     }
  //     setQuestion(quiz[number - 1]);
  //     console.log(question);
  //   }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <FormQuestion question={question} number={number} />
      <FormAnswer
        setAnswer={handleChangeQuestion}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        changeQuestion={handleChangeQuestion}
      />
    </div>
  );
};

export default TriviaApp;
