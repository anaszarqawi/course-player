'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { courseData } from '@/data/course';
import CourseContent from '@/components/CourseContent';
import CourseInfo from '@/components/CourseInfo';
import VideoPlayer from '@/components/VideoPlayer';
import { useParams } from 'next/navigation';
import { getLesson, getNextLesson } from '@/services/CourseController';
import { LessonType } from '@/types/course';
import Comments from '@/components/Comments';
import CourseProgress from '@/components/CourseProgress';
import { IconArrowRight, IconBook, IconCrop169, IconCropLandscape, IconMessageDots, IconQuestionMark, IconTrophy } from '@tabler/icons-react';
import Link from 'next/link';
import LeaderboardModal from './LeaderboardModal';
import AskQuestionModal from './AskQuestionModal';
import ExamModal from './ExamModal';

const Lesson = () => {
  const [currentLesson, setCurrentLesson] = useState<LessonType | null>(null);
  const [nextLessonSlug, setNextLessonSlug] = useState<string | null>(null);
  const [askQuestionModal, setAskQuestionModal] = useState<boolean>(false);
  const [leaderboardModal, setLeaderboardModal] = useState<boolean>(false);
  const [examModal, setExamModal] = useState<boolean>(false);
  const [viewType, setViewType] = useState<'wide' | 'normal'>('normal');
  const [progress, setProgress] = useState<number>(63);
  const { lesson } = useParams();

  useEffect(() => {
    if (!lesson) return;
    const lessonData = getLesson(lesson as string);
    const nextLesson = getNextLesson(lesson as string);
    setCurrentLesson(lessonData);
    setNextLessonSlug(nextLesson?.slug ?? null);
  }, [lesson]);

  const scrollTo = (className: string) => {
    const element = document.getElementsByClassName(className);
    const visibleElement = Array.from(element).find((el) => (el as HTMLElement).offsetParent !== null);
    if (visibleElement) {
      visibleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CourseButtons = () => {
    return (
      <div className="flex flex-wrap gap-2">
        {currentLesson?.type !== 'exam' && (
          <button className="button-2 hidden lg:flex" onClick={() => setViewType(viewType === 'wide' ? 'normal' : 'wide')}>
            {viewType === 'wide' ? <IconCropLandscape size={20} stroke={1.5} /> : <IconCrop169 size={20} stroke={1.5} />}
            {viewType === 'wide' ? 'Normal View' : 'Wide View'}
          </button>
        )}
        <button className="button-2 only-icon-mobile" onClick={() => scrollTo('curriculum')}>
          <IconBook size={20} stroke={1.5} />
          <span className="hidden lg:block">Curriculum</span>
        </button>
        <button className="button-2 only-icon-mobile" onClick={() => setAskQuestionModal(true)}>
          <IconQuestionMark size={20} stroke={1.5} />
          <span className="hidden lg:block">Ask Question</span>
        </button>
        <button className="button-2 only-icon-mobile" onClick={() => setLeaderboardModal(true)}>
          <IconTrophy size={20} stroke={1.5} />
          <span className="hidden lg:block">Leaderboard</span>
        </button>
        <button className="button-2 only-icon-mobile" onClick={() => scrollTo('comments')}>
          <IconMessageDots size={20} stroke={1.5} />
          <span className="hidden lg:block">Comments</span>
        </button>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100 py-3 lg:py-8 pb-4">
        <div className="myContainer">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Courses', href: '/courses' },
              { label: 'Course Details', href: '/course' },
            ]}
          />
          <div className="text-3xl font-bold text-gray-900 mb-3">{courseData.title}</div>
        </div>
      </div>
      {currentLesson?.type !== 'exam' && (
        <VideoPlayer
          videoUrl={currentLesson?.video}
          nextLessonSlug={nextLessonSlug}
          className={`block sticky top-0 lg:static data-[sticky=true]:rounded-none data-[sticky=true]:px-0 lg:!px-6 lg:w-full lg:pt-8 ${viewType === 'wide' ? 'myContainer ' : ' lg:hidden'}`}
        />
      )}
      <div className="flex flex-col lg:flex-row items-start gap-12 w-full mt-4 lg:mt-8 lg:container lg:mx-auto lg:px-6">
        <div className="flex flex-col gap-4 w-full px-6 lg:px-0">
          {currentLesson?.type !== 'exam' ? (
            <VideoPlayer
              videoUrl={currentLesson?.video}
              nextLessonSlug={nextLessonSlug}
              className={`hidden lg:block ${viewType === 'wide' ? '!hidden' : ''}`}
            />
          ) : (
            <div
              className="text-2xl bg-[var(--color-exam)] hover:bg-[var(--color-exam-dark)] transition-colors text-[var(--color-exam-text)] font-semibold px-6 py-4 rounded-lg cursor-pointer"
              onClick={() => setExamModal(true)}>
              Start Exam
            </div>
          )}
          <CourseButtons />
          <CourseInfo info={courseData.details} />
          <Comments comments={courseData.comments} className="hidden lg:block" />
        </div>
        <div className="space-y-8 w-full lg:w-[450px] px-6 lg:px-0">
          <div className="text-2xl text-gray-900 font-semibold">Topics for this course</div>
          <CourseProgress progress={63} />
          <CourseContent content={courseData.content} />
          <Comments comments={courseData.comments} className="block lg:hidden" />
        </div>
      </div>
      <AskQuestionModal isOpen={askQuestionModal} setIsOpen={setAskQuestionModal} />
      <LeaderboardModal courseTitle={courseData.title} progress={progress} isOpen={leaderboardModal} setIsOpen={setLeaderboardModal} />
      {currentLesson?.type === 'exam' && <ExamModal isOpen={examModal} setIsOpen={setExamModal} lesson={currentLesson} />}
    </div>
  );
};

export default Lesson;
