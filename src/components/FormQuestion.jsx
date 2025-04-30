import React from "react";

const FormQuestion = ({ question, number }) => {
  console.log("ini adalah question", question.question);
  console.log("ini adalah number", number);

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex pb-20 justify-center">
      <div className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-2xl p-4 flex flex-col leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Question {number+1}
          </div>
          <p className="text-gray-700 text-base">{question.question}</p>
        </div>
      </div>
    </div>
  );
};

export default FormQuestion;
