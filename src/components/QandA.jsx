import React, { useState } from "react";
import { Questions } from "./Question";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const QandA = () => {
  const [isClicked, setIsClicked] = useState(null);
  const revealAnswer = (index) => {
    if (index === isClicked) {
      return setIsClicked(null);
    }
    setIsClicked(index);
  };

  const toggleBtn = (index) => {
    if (index === isClicked) {
      return <AiOutlineMinus />;
    } else {
      return <AiOutlinePlus />;
    }
  };

  const screenReaderInstructions = (ques, index) => {
    if (index === Questions.length - 2 && index === isClicked) {
      return ques.answer + "... Press tab to hear the final question.";
    } else if (index === isClicked) {
      return ques.answer + "... Press tab to hear the next question.";
    } else {
      return ques.question + "... Press enter to reveal the answer.";
    }
  };

  const accordionClosed =
    "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0";
  const accordionOpen =
    "block max-h-[400px] overflow-y-visible opacity-100 mr-auto";

  return (
    <>
      <section id="trivia" className=" pt-96 px-2 md:pt-60 pb-6  bg-white">
        <h2
          className=" bg-clip-text text-black font-bold text-4xl 
                text-center "
        >
            Asked Questions
        </h2>
        {Questions.map((trivia, index) => (
          <div
            key={trivia.question}
            className="flex flex-col items-center max-w-3xl px-5 py-2 mx-auto my-5 shadow-lg gap-x-5 dark:shadow-none dark:border dark:border-slate-200 rounded-2xl "
          >
            <div className="flex items-center justify-between w-full py-5 cursor-pointer ">
              <h3 className="w-full ">
                <button
                  className="font-medium text-xl text-accordion-question leading-relaxed  w-full text-left pr-5 flex justify-between  items-center"
                  id={trivia.headingID}
                  aria-label={screenReaderInstructions(trivia, index)}
                  aria-expanded={isClicked === index ? "true" : false}
                  aria-controls={trivia.answerID}
                  onClick={() => revealAnswer(index)}
                >
                  <span>{trivia.question}</span>  
                  <span>{toggleBtn(index)}</span>
                </button>
              </h3>
            </div>

            {
              <section
                id={trivia.answerID}
                aria-labelledby={trivia.headingID}
                className={
                  isClicked === index ? accordionOpen : accordionClosed
                }
              >
                <p className="font-normal text-accordion-answer text-lg">
                  {trivia.answer}
                </p>
              </section>
            }
          </div>
        ))}
      </section>
    </>
  );
};
export default QandA;
