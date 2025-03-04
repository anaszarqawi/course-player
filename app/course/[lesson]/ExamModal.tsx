import Modal from '@/components/Modal';
import { LessonType, QuestionType } from '@/types/course';
import { IconCheck, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type ExamModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  lesson: LessonType;
};

const ExamModal = ({ isOpen, setIsOpen, lesson }: ExamModalProps) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(null);
  const { lesson: slug } = useParams() as { lesson: string };

  useEffect(() => {
    if (lesson.questions) {
      setCurrentQuestion(lesson.questions[0]);
    }
  }, [lesson]);

  useEffect(() => {
    const answers = localStorage.getItem(`lesson-${slug}-answers`);
    if (answers) {
      setAnswers(JSON.parse(answers));
    }
  }, [slug]);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    // Save answers to local storage
    localStorage.setItem(`lesson-${slug}-answers`, JSON.stringify(answers));
  };

  const handleNextQuestion = () => {
    if (lesson.questions) {
      const currentIndex = lesson.questions.findIndex((question) => question.id === currentQuestion?.id);
      setCurrentQuestion(lesson.questions[currentIndex + 1]);
    }
  };

  const handlePreviousQuestion = () => {
    if (lesson.questions) {
      const currentIndex = lesson.questions.findIndex((question) => question.id === currentQuestion?.id);
      if (currentIndex > 0) {
        setCurrentQuestion(lesson.questions[currentIndex - 1]);
      }
    }
  };

  const handleSubmit = () => {
    const correctAnswersPoints = lesson.questions?.reduce((acc, question) => {
      if (question.correct_answer === answers[question.id]) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const totalPoints = lesson.questions?.length;

    alert(`You scored ${correctAnswersPoints} out of ${totalPoints}`);
  };

  return (
    lesson.type === 'exam' &&
    lesson.questions && (
      <Modal
        show={isOpen}
        onClose={() => setIsOpen(false)}
        classNames={{
          body: '!bg-[var(--color-exam-dark)] w-full h-full rounded-none',
          base: '!p-0 w-full h-full',
        }}>
        {/* Header */}
        <div>
          <button className="button-1 p-3 bg-transparent text-white rounded-lg" onClick={() => setIsOpen(false)}>
            <IconChevronLeft size={24} />
          </button>
        </div>
        {/* Questions Progress */}
        <div className="flex items-center justify-center gap-2 my-12">
          {lesson.questions.map((question) => (
            <div
              key={question.id}
              className="w-10 h-10 flex items-center justify-center border border-white text-white data-[active=true]:!bg-white data-[active=true]:text-[var(--color-exam)] data-[answered=true]:bg-[var(--color-exam-light)] rounded-full"
              data-active={currentQuestion?.id === question.id}
              data-answered={answers[question.id] !== undefined}
              onClick={() => setCurrentQuestion(question)}>
              {question.id}
            </div>
          ))}
        </div>
        {/* Question */}
        <div className="flex flex-col gap-4 bg-white p-8 rounded-2xl">
          <div className="text-base font-semibold">
            <div>{currentQuestion?.id}.</div>
            {currentQuestion?.question}
          </div>
          <div className="flex flex-col gap-4 h-full mt-4">
            {/* Options */}
            {currentQuestion?.options &&
              Object.entries(currentQuestion?.options).map(([key, value]) => (
                <div
                  key={key}
                  className="group flex items-center justify-start shadow-2 rounded-lg bg-white transition-colors cursor-pointer data-[selected=true]:bg-[var(--color-exam)] data-[selected=true]:text-white"
                  data-selected={answers[currentQuestion?.id] === key}
                  onClick={() => handleAnswer(currentQuestion?.id, key)}>
                  <div className="p-4 flex items-center justify-center border-r border-[var(--color-exam)]/50 group-data-[selected=true]:!border-white/50">
                    <div className="w-4 h-4 flex items-center justify-center border border-[var(--color-exam)] rounded-full group-data-[selected=true]:bg-white group-data-[selected=true]:text-[var(--color-exam)]">
                      {answers[currentQuestion?.id] === key && <div className="w-2 h-2 bg-[var(--color-exam)] rounded-full"></div>}
                    </div>
                  </div>
                  <div className="text-sm px-4 py-2">{value}</div>
                </div>
              ))}
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-between mt-4">
            <button className="button-1 p-0 w-14 h-14 bg-[var(--color-exam)] text-white rounded-lg" onClick={handlePreviousQuestion}>
              <IconChevronLeft size={24} />
            </button>
            {currentQuestion?.id === lesson.questions[lesson.questions.length - 1].id ? (
              <button className="button-1 p-0 w-14 h-14 bg-[var(--color-exam)] text-white rounded-lg" onClick={handleSubmit}>
                <IconCheck size={24} />
              </button>
            ) : (
              <button className="button-1 p-0 w-14 h-14 bg-[var(--color-exam)] text-white rounded-lg" onClick={handleNextQuestion}>
                <IconChevronRight size={24} />
              </button>
            )}
          </div>
        </div>
      </Modal>
    )
  );
};

export default ExamModal;
