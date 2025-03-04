import { courseData } from '@/data/course';
import { LessonType } from '@/types/course';

export const getLesson = (lessonSlug: string): LessonType | null => {
  const section = courseData.content.find((section) => section.lessons.some((lesson) => lesson.slug === lessonSlug));
  const lesson = section?.lessons.find((lesson) => lesson.slug === lessonSlug);
  return lesson ?? null;
};

export const getNextLesson = (lessonSlug: string): LessonType | null => {
  const section = courseData.content.find((section) => section.lessons.some((lesson) => lesson.slug === lessonSlug));
  const nextLesson = section?.lessons[1];
  return nextLesson ?? null;
};
