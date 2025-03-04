'use client';
import Modal from '@/components/Modal';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

type AskQuestionModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const AskQuestionModal = ({ isOpen, setIsOpen }: AskQuestionModalProps) => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const question = sessionStorage.getItem('question');
    if (question) {
      setQuestion(question);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
    sessionStorage.setItem('question', e.target.value);
  };

  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)} classNames={{ body: 'max-w-[500px]' }}>
      <div className="text-2xl text-gray-700 font-semibold mb-4">Ask a Question</div>
      <form>
        <textarea className="input-1 shadow-1" rows={5} placeholder="Write a Question" value={question} onChange={handleChange} />
        <button type="submit" className="button-1 justify-self-end">
          Send Question
          <IconArrowRight size={16} />
        </button>
      </form>
    </Modal>
  );
};

export default AskQuestionModal;
