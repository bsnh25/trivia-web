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
  const [allQuestion, setAllQuestion] = useState(quiz);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setQuestion(quiz[number]);
    setNumber(1);
  }, []);

  function handleChangeQuestion() {
    console.log("Number ", number);
    if (question.answer === answer) {
      const updatedQuestions = allQuestion.map((q) => {
        if (q.id === question.id) {
          return { ...q, isCorrect: true };
        }
        return q;
      });
      setAllQuestion(updatedQuestions);
    }    

    if (number >= 5) {
      let score = 0;
      allQuestion.forEach((e) => {
        if (e.isCorrect) score += 20;
      });
      alert("Quiz Selesai, kamu benar " + score);
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
